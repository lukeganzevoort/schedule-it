#!/bin/bash

# MongoDB Docker container for development
# Press Ctrl+C to stop the container

CONTAINER_NAME="schedule-it-mongo-dev"
MONGO_PORT=27017
MONGO_VERSION="latest"
DATA_DIR="./mongo-data"

# Create data directory if it doesn't exist
mkdir -p "$DATA_DIR"

echo "Starting MongoDB container..."
echo "Container name: $CONTAINER_NAME"
echo "Port: $MONGO_PORT"
echo "Data directory: $DATA_DIR"
echo "Press Ctrl+C to stop"
echo ""

# Run MongoDB container
# --rm: automatically remove container when it stops
# -it: interactive mode with TTY (allows Ctrl+C to work)
# -p: map port 27017 from container to host
# -v: mount volume for data persistence
# --name: give container a name
docker run --rm -it \
  --name "$CONTAINER_NAME" \
  -p "$MONGO_PORT:27017" \
  -v "$(pwd)/$DATA_DIR:/data/db" \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=admin123 \
  mongo:"$MONGO_VERSION"

