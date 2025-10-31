FROM oven/bun:latest

WORKDIR /app

# Copy only root-level files first (for caching)
COPY package.json bun.lock ./

# Copy api app
COPY . ./

ENV MV_API=https://admin.homietv.com/fweb
RUN bun install --no-save
RUN bun run build

EXPOSE 3000
CMD ["bun", "run", "start"]
