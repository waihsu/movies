// src/createApp.ts
import { Elysia } from "elysia";
import { openapi } from "@elysiajs/openapi";
import { logger } from "@bogeychan/elysia-logger";
import { movies } from "@/modules/movies";
import { tvseries } from "@/modules/tvseries";
import { createApp } from "./create-apps";

const api = createApp("/api/v1").use(movies).use(tvseries);
export type Api = typeof api;
export default api;
