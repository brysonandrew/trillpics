
import express from "express";
import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";
import {
  CLIENT_ORIGINS,
  SERVER_PATH,
  SERVER_PORT,
} from "@/constants/api";
import { initTRPC } from "@trpc/server";
import { render } from "@/server/render";
import serverless from "serverless-http"
import { createContext } from "@/server/context";

const t = initTRPC.create();

const publicProcedure = t.procedure;

const router = t.router({
  generate: publicProcedure.mutation(
    async (
      x: any
    ) => {
      // console.log(x);
      await render(x.rawInput);
      // console.log(input);
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

api.listen(SERVER_PORT, () =>
  console.log(
    `Listening on port ${SERVER_PORT}.`
  )
);

export const handler = serverless(api);

// export const handler = netlifyTRPCHandler({
//   router,
//   createContext,
// });