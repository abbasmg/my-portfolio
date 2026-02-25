# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.11.0

################################################################################
# Build stage: install deps and compile with Parcel
FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /usr/src/app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

COPY . .
RUN npm run build

################################################################################
# Final stage: serve compiled assets with nginx (no Node runtime needed)
FROM nginx:alpine AS final

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/app.conf

# Copy built assets from build stage
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Cloud Run expects port 8080
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
