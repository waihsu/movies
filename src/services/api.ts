import Elysia from "elysia";
import { movies } from "@/modules/movies";
import { tvseries } from "@/modules/tvseries";

export const api = new Elysia({ prefix: "/api/v1" }).use(movies).use(tvseries);

export default api;
