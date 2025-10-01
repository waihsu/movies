// src/createApp.ts
import { Elysia } from "elysia";
import { openapi } from "@elysiajs/openapi";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { logger } from "@bogeychan/elysia-logger";
import { readFileSync } from "fs";
import { join } from "path";
import api from "./api";

export function createApp(opts: { indexPath?: string } = {}) {
  const indexPath =
    opts.indexPath ?? join(process.cwd(), "public", "index.html");

  let indexHtml =
    "<!doctype html><html><head><meta charset='utf-8'><title>App</title></head><body><div id='root'></div></body></html>";
  try {
    indexHtml = readFileSync(indexPath, "utf8");
  } catch (e) {
    console.warn(
      `[createApp] could not read ${indexPath} — using minimal fallback HTML`
    );
  }

  const app = new Elysia()
    .use(logger()) // log every request first
    .use(staticPlugin({ assets: "public" })) // serve /public static files
    .use(html()) // helper for HTML responses
    .use(openapi()) // expose OpenAPI docs (see /openapi)
    .use(api) // mount API routes (plugin-style)
    .get("/*", () => indexHtml); // SPA fallback — MUST be last

  return app;
}

export default createApp;
