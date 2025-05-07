# Build React + Vite app using NodeJS
FROM node:23-slim AS builder

# Set working directory
WORKDIR /app

# Copy source code
COPY . .

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Serve with Nginx
FROM nginx:stable-alpine AS production

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built app from previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config (optional, recommended for SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]