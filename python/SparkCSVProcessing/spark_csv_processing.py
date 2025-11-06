from pyspark.sql import SparkSession
from pyspark.sql.functions import col, count, mean, min, max
import os
import sys
import time
import subprocess

def wait_for_spark_master():
    """Wait for Spark master to be ready"""
    print("⏳ Waiting for Spark master to be ready...")
    max_attempts = 30
    attempt = 0
    
    while attempt < max_attempts:
        try:
            result = subprocess.run(
                ['nc', '-z', 'spark-master', '7077'],
                capture_output=True,
                timeout=5
            )
            if result.returncode == 0:
                print("✅ Spark master is ready!")
                return True
        except (subprocess.TimeoutExpired, FileNotFoundError):
            pass
        
        attempt += 1
        print(f"  Attempt {attempt}/{max_attempts} - Spark master not ready yet...")
        time.sleep(5)
    
    print("❌ Spark master never became ready")
    return False

def debug_shared_volume():
    """Debug function to check shared volume access"""
    print("\n=== Shared Volume Debug ===")
    shared_path = "/shared_data"
    local_path = "/app/data"
    
    print(f"Shared data path: {shared_path}")
    print(f"Local data path: {local_path}")
    
    # Check shared volume
    if os.path.exists(shared_path):
        print(f"✅ Shared volume exists: {shared_path}")
        shared_files = os.listdir(shared_path)
        print(f"Shared files: {shared_files}")
        for file in shared_files:
            file_path = os.path.join(shared_path, file)
            print(f"  - {file}: {os.path.getsize(file_path)} bytes")
    else:
        print(f"❌ Shared volume not found: {shared_path}")
    
    # Check local volume
    if os.path.exists(local_path):
        print(f"✅ Local volume exists: {local_path}")
        local_files = os.listdir(local_path)
        print(f"Local files: {local_files}")
    else:
        print(f"❌ Local volume not found: {local_path}")
    
    print("=== End Debug ===\n")

def main():
    print("🚀 Starting Python Spark CSV Processing Application...")
    
    # Display environment information
    print("Environment:")
    print(f"  SPARK_MASTER: {os.getenv('SPARK_MASTER', 'local[*]')}")
    
    # Debug shared volumes
    debug_shared_volume()
    
    # Wait for Spark master to be ready
    if not wait_for_spark_master():
        sys.exit(1)
    
    try:
        print("Creating Spark session...")
        
        # Create Spark session for cluster mode
        spark = SparkSession.builder \
            .appName("Python Spark CSV Processing - Cluster Mode") \
            .master(os.getenv('SPARK_MASTER', 'local[*]')) \
            .config("spark.sql.adaptive.enabled", "true") \
            .config("spark.sql.adaptive.coalescePartitions.enabled", "true") \
            .config("spark.driver.host", "spark-app") \
            .config("spark.driver.bindAddress", "0.0.0.0") \
            .getOrCreate()
        
        # Set log level
        spark.sparkContext.setLogLevel("WARN")
        
        print("✅ Spark session created successfully!")
        print("📝 Running in CLUSTER MODE with shared volumes")
        
        # Test with simple data first
        print("Testing Spark connection with simple data...")
        test_data = spark.sql("SELECT 'Hello Spark from Python Cluster!' as greeting, 42 as number")
        test_data.show()
        
        # Process CSV data using SHARED volume
        process_csv_data(spark)
        
        spark.stop()
        print("✅ Application completed successfully!")
        
    except Exception as e:
        print(f"❌ Error: {str(e)}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

def process_csv_data(spark):
    try:
        print("Reading CSV data from SHARED volume...")
        
        # Use SHARED volume path that all containers can access
        data_path = "/shared_data"
        
        # Check if shared data directory exists and list files
        print(f"Checking shared data directory: {data_path}")
        if not os.path.exists(data_path):
            print(f"❌ Shared data directory not found: {data_path}")
            print("Current working directory:", os.getcwd())
            print("Directory contents:")
            for item in os.listdir('/'):
                print(f"  - {item}")
            return
        
        # List all files in shared data directory
        all_files = os.listdir(data_path)
        print(f"All files in shared data directory: {all_files}")
        
        csv_files = [f for f in all_files if f.endswith('.csv')]
        if not csv_files:
            print("❌ No CSV files found in shared data directory")
            return
        
        print(f"Found {len(csv_files)} CSV file(s):")
        for file in csv_files:
            print(f"  - {file}")
        
        # Use absolute file paths from SHARED volume
        csv_paths = [os.path.join(data_path, file) for file in csv_files]
        
        # Check if files actually exist and are readable in SHARED volume
        for path in csv_paths:
            if not os.path.exists(path):
                print(f"❌ File does not exist in shared volume: {path}")
                return
            else:
                print(f"✅ File exists in shared volume: {path}")
                print(f"   File size: {os.path.getsize(path)} bytes")
                print(f"   File readable: {os.access(path, os.R_OK)}")
        
        # Read and process CSV files from SHARED volume
        print("Reading CSV files from shared volume...")
        df = spark.read \
            .option("header", "true") \
            .option("inferSchema", "true") \
            .csv(csv_paths)
        
        # Show results
        print("DataFrame schema:")
        df.printSchema()
        
        print("First 10 rows:")
        df.show(10, truncate=False)
        
        count_rows = df.count()
        print(f"Total records: {count_rows}")
        
        # Show basic statistics
        print("Basic statistics:")
        df.describe().show()
        
        # Show distinct values for each column
        for column in df.columns:
            print(f"Distinct values for '{column}':")
            df.select(column).distinct().show(truncate=False)
            
        # Additional analysis for numeric columns
        numeric_columns = [col_name for col_name, dtype in df.dtypes 
                          if dtype in ['int', 'double', 'float', 'long', 'decimal']]
        
        if numeric_columns:
            print("Numeric columns analysis:")
            for num_col in numeric_columns:
                df.select(
                    count(col(num_col)).alias(f"count_{num_col}"),
                    mean(col(num_col)).alias(f"avg_{num_col}"),
                    min(col(num_col)).alias(f"min_{num_col}"),
                    max(col(num_col)).alias(f"max_{num_col}")
                ).show()
        
        # Show some aggregations by department (if exists)
        if 'department' in df.columns:
            print("Records by department:")
            df.groupBy('department').count().orderBy('count', ascending=False).show()
            
        if 'salary' in df.columns:
            print("Average salary by department:")
            df.groupBy('department').agg(
                mean('salary').alias('avg_salary'),
                count('salary').alias('employee_count')
            ).orderBy('avg_salary', ascending=False).show()
        
    except Exception as e:
        print(f"Error processing CSV: {str(e)}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()