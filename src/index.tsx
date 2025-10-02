// src/server.ts
import index from "@/index.html";
import { serve } from "bun";
import { createApi } from "./services/create-api";

const BASE_PORT = Number(process.env.PORT) || 3000;
const MAX_TRIES = 20;

async function start() {
  const api = createApi();

  const server = serve({
    port: BASE_PORT,
    routes: {
      "/*": index,
      "/api/v1/*": api.fetch,
    },
    // fetch: app.fetch,
  });

  console.log(`🚀 Server running at http://localhost:${server.port}`);
  console.log(
    `📚 OpenAPI docs: http://localhost:${server.port}/api/v1/openapi`
  );
}

start();
