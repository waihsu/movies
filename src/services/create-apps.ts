import { logger } from "@bogeychan/elysia-logger";
import Elysia from "elysia";

export function createApp(prefix: string) {
  return new Elysia({ prefix: prefix }).use(
    logger({
      transport: {
        target: "pino-pretty",
        options: {
          colorize: true,
        },
      },
    })
  );
}
