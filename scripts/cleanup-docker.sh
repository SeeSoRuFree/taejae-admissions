#!/bin/bash
# Docker cleanup script for bastion server
# Recommended to run weekly via cron: 0 2 * * 0 /path/to/cleanup-docker.sh

set -e

echo "=========================================="
echo "Docker Cleanup - $(date)"
echo "=========================================="

echo "Disk usage before cleanup:"
df -h /var/lib/docker 2>/dev/null || df -h /

echo ""
echo "Docker disk usage before:"
docker system df

echo ""
echo "1. Removing stopped containers older than 7 days..."
docker container prune -f --filter "until=168h"

echo ""
echo "2. Removing dangling images..."
docker image prune -f

echo ""
echo "3. Removing unused images (keep only latest 5 taejae-frontend)..."
docker images "*/taejae-frontend" --format "{{.ID}} {{.CreatedAt}}" | \
  sort -rk 2 | \
  tail -n +6 | \
  awk '{print $1}' | \
  xargs -r docker rmi -f || true

echo ""
echo "4. Removing build cache older than 14 days..."
docker builder prune -f --filter "until=336h"

echo ""
echo "5. Removing unused volumes..."
docker volume prune -f

echo ""
echo "6. Removing unused networks..."
docker network prune -f

echo ""
echo "Docker disk usage after:"
docker system df

echo ""
echo "Disk usage after cleanup:"
df -h /var/lib/docker 2>/dev/null || df -h /

echo ""
echo "Cleanup completed at $(date)"
echo "=========================================="
