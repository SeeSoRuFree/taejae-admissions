#!/bin/bash
set -e

# This script is executed on the remote server via SSH
# All variables are passed as environment variables

container_name="taejae-admissions-$ENVIRONMENT"

# Decode base64 encoded secrets
NCP_SECRET_KEY=$(echo "$NCP_SECRET_B64" | base64 -d)

echo "Deploying container: $container_name"

# Stop and remove existing container
sudo docker stop $container_name 2>/dev/null || true
sudo docker rm $container_name 2>/dev/null || true

# Login to registry
echo "$NCP_SECRET_KEY" | sudo docker login \
  $NCP_REGISTRY \
  -u "$NCP_ACCESS_KEY" \
  --password-stdin

# Pull latest image
sudo docker pull $NCP_REGISTRY/taejae-admissions:$IMAGE_TAG

# Run new container
sudo docker run -d \
  --name $container_name \
  -p $CONTAINER_PORT:$CONTAINER_PORT \
  --restart unless-stopped \
  --memory=$CONTAINER_MEMORY_LIMIT \
  --memory-swap=$CONTAINER_MEMORY_SWAP \
  --log-driver json-file \
  --log-opt max-size=$LOG_MAX_SIZE \
  --log-opt max-file=$LOG_MAX_FILE \
  -e NODE_ENV=$ENVIRONMENT \
  -e REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL \
  -e DEPLOY_TIME="$(date '+%Y-%m-%d %H:%M:%S')" \
  -e GIT_COMMIT=$GIT_COMMIT \
  $NCP_REGISTRY/taejae-admissions:$IMAGE_TAG

echo "Container deployed successfully on $(hostname)"
