// src/server.ts
import index from "@/index.html";
import { serve } from "bun";
import api from "./services/api";
import openApi from "./services/openapi";

const BASE_PORT = Number(process.env.PORT) || 3000;
const MAX_TRIES = 20;

async function start() {
  const server = serve({
    port: BASE_PORT,
    routes: {
      "/*": index,
      "/openapi/*": openApi.fetch,
      "/api/v1/*": api.fetch,
    },
    // fetch: app.fetch,
  });

  console.log(`🚀 Server running at http://localhost:${server.port}`);
  console.log(`📚 OpenAPI docs: http://localhost:${server.port}/openapi/doc`);
}

start();
