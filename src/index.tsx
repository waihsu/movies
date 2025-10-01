// src/server.ts

import createApp from "./services/create-app";

const BASE_PORT = Number(process.env.PORT) || 3000;
const MAX_TRIES = 20;

async function start() {
  const app = createApp();

  for (let i = 0; i < MAX_TRIES; i++) {
    const port = BASE_PORT + i;
    try {
      // Elysia.listen can be sync or return a Promise depending on runtime.
      const out = app.listen(port as any);

      if (out && typeof (out as any).then === "function") {
        // async listen
        const res = await (out as any);
        const actualPort = res?.port ?? port;
        console.log(`🚀 Server running at http://localhost:${actualPort}`);
        console.log(`📚 OpenAPI docs: http://localhost:${actualPort}/openapi`);
        return;
      } else {
        // sync listen
        const actualPort = (out as any)?.port ?? port;
        console.log(`🚀 Server running at http://localhost:${actualPort}`);
        console.log(`📚 OpenAPI docs: http://localhost:${actualPort}/openapi`);
        return;
      }
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
