# Dockerfile
# Multi-stage Dockerfile for SvelteKit with Node.js adapter

# Base image
FROM node:22-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./
RUN npm ci

# Generate Prisma client
COPY prisma ./prisma/
RUN npx prisma generate

# Builder stage
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build application
ENV NODE_ENV=production
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 sveltekit

# Copy built application
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma

# Copy static assets
COPY --from=builder /app/static ./static

# Switch to non-root user
USER sveltekit

EXPOSE 5173

ENV PORT=5173
ENV HOSTNAME="0.0.0.0"

CMD ["node", "build"]