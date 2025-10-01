// src/createApp.ts
import { Elysia } from "elysia";
import { openapi } from "@elysiajs/openapi";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { logger } from "@bogeychan/elysia-logger";
import { readFileSync } from "fs";
import { join } from "path";
import api from "./api";
import indexHtml from "@/index.html";

export function createApp() {
  const app = new Elysia()
    .use(
      logger({
        transport: {
          target: "pino-pretty",
          options: {
            colorize: true,
          },
        },
      })
    )
    .use(openapi()) // expose OpenAPI docs (see /openapi)
    .use(api); // mount API routes (plugin-style)

  return app;
}

export default createApp;
