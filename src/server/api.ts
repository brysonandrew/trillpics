
import express from "express";
import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";
import {
  CLIENT_ORIGINS,
  SERVER_PATH,
  API_PORT,
} from "@/constants/api";
import { initTRPC } from "@trpc/server";
import { render } from "@/server/remotion/render";
import { createContext } from "@/server/context"; 
import 'dotenv/config'

const t = initTRPC.create();

const publicProcedure = t.procedure;

const router = t.router({
  hi:publicProcedure.query(() => "hi"),
  generate: publicProcedure.mutation(
    async (
      x: any
    ) => {
      await render(x.rawInput);
      return {
        message: "goodbye!",
      };
    }
  ),
});

export type TAppRouter = typeof router;

const api = express();

api.use(express.json());
api.use(
  cors({
    origin: CLIENT_ORIGINS,
  })
);

api.use(
  SERVER_PATH,
  trpcExpress.createExpressMiddleware({
    router,
    createContext,
  })
);

api.listen(API_PORT, () =>
  console.log(
    `Listening on port ${API_PORT}.`,
    `Allowed origins: ${CLIENT_ORIGINS}`
  )
);
