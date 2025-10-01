// src/server.ts
import index from "@/index.html";
import { serve } from "bun";
import createApp from "./services/create-app";

const BASE_PORT = Number(process.env.PORT) || 3000;
const MAX_TRIES = 20;

async function start() {
  const app = createApp();

  const server = serve({
    port: BASE_PORT,
    routes: {
      "/*": index,
      "/api/v1/*": app.fetch,
    },
    // fetch: app.fetch,
  });

  console.log(`🚀 Server running at http://localhost:${server.port}`);
  // console.log(`📚 OpenAPI docs: http://localhost:${server.port}/openapi`);
}

start();
