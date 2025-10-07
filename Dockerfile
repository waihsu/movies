FROM oven/bun:latest

WORKDIR /app

# Copy only root-level files first (for caching)
COPY package.json bun.lock ./

# Copy api app
COPY . ./

RUN bun install --no-save

EXPOSE 3000
CMD ["bun", "run", "start"]
