# Multi-stage build for React application

# Stage 1: Build
FROM node:22.18.0-alpine AS builder
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build arguments
ARG NODE_ENV=production
ARG REACT_APP_API_BASE_URL
ENV NODE_ENV=${NODE_ENV}
ENV REACT_APP_API_BASE_URL=${REACT_APP_API_BASE_URL}

# Build the application
RUN npm run build

# Stage 2: Production with Nginx
FROM nginx:1.25-alpine AS runner

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Add labels for metadata
ARG BUILD_DATE
ARG VCS_REF
ARG VERSION
LABEL org.opencontainers.image.created=${BUILD_DATE} \
      org.opencontainers.image.revision=${VCS_REF} \
      org.opencontainers.image.version=${VERSION} \
      org.opencontainers.image.title="Taejae Admissions Frontend" \
      org.opencontainers.image.description="React-based admissions website"

# Expose port
EXPOSE 3100

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3100/health || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
