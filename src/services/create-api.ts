// src/createApp.ts
import { Elysia } from "elysia";
import { openapi } from "@elysiajs/openapi";
import { logger } from "@bogeychan/elysia-logger";
import { movies } from "@/modules/movies";
import { tvseries } from "@/modules/tvseries";
import { createApp } from "./create-apps";

export function createApi() {
  const app = createApp("/api/v1")
    .use(openapi({ path: "/openapi" })) // expose OpenAPI docs (see /openapi)
    .use(movies)
    .use(tvseries);

  return app;
}
