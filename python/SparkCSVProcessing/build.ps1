param([switch]$NoDocker = $false)

Write-Host "Python Spark Build Automation" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan

# Check if Docker is running
Write-Host "Checking Docker..." -ForegroundColor Yellow
try {
    $dockerInfo = docker version 2>&1
    if ($LASTEXITCODE -ne 0) {
        Write-Host " Docker is not running! Please start Docker Desktop first." -ForegroundColor Red
        exit 1
    }
    Write-Host "Docker is running" -ForegroundColor Green
} catch {
    Write-Host "Docker is not running!" -ForegroundColor Red
    exit 1
}

# Cleanup
Write-Host "Cleaning up previous builds..." -ForegroundColor Yellow
docker-compose down --remove-orphans 2>$null

# Create test data if it doesn't exist
if (-not (Test-Path "data/sample.csv")) {
    Write-Host "Creating sample data..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Force -Path data | Out-Null
    @"
id,name,age,department,salary
1,John Doe,30,Engineering,75000
2,Jane Smith,25,Marketing,65000
3,Bob Johnson,35,Sales,70000
4,Alice Brown,28,Engineering,80000
5,Charlie Wilson,32,Marketing,60000
6,Diana Lee,29,Engineering,85000
7,Frank Miller,31,Sales,72000
8,Grace Davis,27,Marketing,62000
"@ | Out-File -FilePath "data/sample.csv" -Encoding utf8
    Write-Host "Sample data created" -ForegroundColor Green
}

if (-not $NoDocker) {
    Write-Host "Starting Docker containers..." -ForegroundColor Cyan
    Write-Host "   Spark UI: http://localhost:8080" -ForegroundColor Magenta
    Write-Host "   Worker UI: http://localhost:8081" -ForegroundColor Magenta
    
    Write-Host "Building and starting Python Spark application..." -ForegroundColor Gray
    docker-compose up --build
} else {
    Write-Host "Pre-build completed successfully!" -ForegroundColor Green
    Write-Host "   Run 'docker-compose up --build' to start containers" -ForegroundColor Yellow
}

Write-Host "Usage Tips:" -ForegroundColor Cyan
Write-Host "   .\build.ps1              # Build and run everything" -ForegroundColor Gray
Write-Host "   .\build.ps1 -NoDocker    # Prepare without starting Docker" -ForegroundColor Gray