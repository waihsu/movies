// src/server.ts
import index from "@/index.html";
import { serve } from "bun";
import createApp from "./services/create-app";

const BASE_PORT = Number(process.env.PORT) || 3000;
const MAX_TRIES = 20;

async function start() {
  const app = createApp();

  for (let i = 0; i < MAX_TRIES; i++) {
    const port = BASE_PORT + i;
    try {
      const server = serve({
        port,
        routes: {
          "/*": index,
          "/api/v1/*": app.fetch,
        },
        // fetch: app.fetch,
      });

      console.log(`🚀 Server running at http://localhost:${server.port}`);
      console.log(`📚 OpenAPI docs: http://localhost:${server.port}/openapi`);

      return;
    } catch (err: any) {
      if (err?.code === "EADDRINUSE") {
        console.warn(`[start] port ${port} in use — trying ${port + 1}...`);
        continue;
      }
      console.error("[start] Failed to start server:", err);
      process.exit(1);
    }
  }

  console.error(
    `[start] Could not find a free port in range ${BASE_PORT}-${
      BASE_PORT + MAX_TRIES - 1
    }`
  );
  process.exit(1);
}

start();
