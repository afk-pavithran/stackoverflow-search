# stackoverflow-search

## Requirements

- Python 3.9+
- NodeJS 18.7
- Docker (Optional)

### Steps to Run (Without Docker)

# Backend

 - cd into backend/ directory
   ```sh
    python manage.py runserver 0.0.0.0:8000
   ```

# Frontend

 - cd into frontend/ directory
   ```sh
    npm run dev
   ```

### Steps to Run using Docker

 - cd into backend/ & frontend/ directory respectively
 - Build and Tage the docker image
   ```sh
    docker build -t <image-name> .
   ```
 - Run the container
   ```sh
    docker run -d -p <container-port>:<host:port> <image-name>  
   ```
 - NOTE: For frontend use 3000 as port, for backend use 8000 as port