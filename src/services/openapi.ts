import openapi from "@elysiajs/openapi";
import { createApp } from "./create-apps";

const openApi = createApp("/openapi").use(openapi({ path: "/doc" }));
export default openApi;
