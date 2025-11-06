FROM python:3.9-slim

# Install dependencies including netcat
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    default-jre \
    curl \
    netcat-openbsd \
    && rm -rf /var/lib/apt/lists/*

# Install PySpark and other Python packages
RUN pip install pyspark==3.5.0 pandas

# Set environment variables
ENV SPARK_MASTER=spark://spark-master:7077
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Copy both script and data
COPY spark_csv_processing.py .
COPY data/ /app/data/

CMD ["python", "spark_csv_processing.py"]