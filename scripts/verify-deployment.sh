#!/bin/bash
set -e

# This script verifies the deployment on the remote server
# All variables are passed as environment variables

container_name="taejae-admissions-$ENVIRONMENT"

echo "Verifying deployment of: $container_name"

# Wait for container to start
sleep 10

# Check container status
if sudo docker ps | grep -q $container_name; then
  echo "✅ Container is running on $(hostname)"
  sudo docker stats $container_name --no-stream

  # Health check
  if curl -f http://localhost:$CONTAINER_PORT/health; then
    echo "✅ Health check passed on $(hostname)"
  else
    echo "❌ Health check failed on $(hostname)"
    sudo docker logs $container_name --tail 50
    exit 1
  fi
else
  echo "❌ Container failed to start on $(hostname)"
  sudo docker logs $container_name
  exit 1
fi
