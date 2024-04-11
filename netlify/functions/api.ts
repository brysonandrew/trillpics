// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from "express";
import serverless from "serverless-http";
import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";
import {
  CLIENT_ORIGINS,
  SERVER_PATH,
  SERVER_PORT,
} from "@/constants/api";
import { initTRPC } from "@trpc/server";
import { render } from "netlify/functions/render";

const t = initTRPC.create();

const publicProcedure = t.procedure;

const router = t.router({
  // Queries are the best place to fetch data
  // hello: publicProcedure.query(() => {
  //   return {
  //     message: "hello world",
  //   };
  // }),

  // Mutations are the best place to do things like updating a database
  generate: publicProcedure.mutation(
    async (
      x: any
      //ResolveOptions<
      // ProcedureParams<any, any>
      //   >
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


const createContext: any = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({
  req,
  res,
});


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