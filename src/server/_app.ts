import express from "express";
import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";
import {
  render,
  TRenderInput,
} from "./render";
import {
  initTRPC,
  ProcedureParams,
} from "@trpc/server";
import { ResolveOptions } from "@trpc/server/dist/core/internals/utils";
const t = initTRPC.create();

export const publicProcedure =
  t.procedure;

const router = t.router({
  // Queries are the best place to fetch data
  hello: publicProcedure.query(() => {
    return {
      message: "hello world",
    };
  }),

  // Mutations are the best place to do things like updating a database
  generate: publicProcedure.mutation(
    async (
      x: any
      //ResolveOptions<
       // ProcedureParams<any, any>
   //   >
    ) => {
      console.log(x);
      const { input,  } = x;
      await render(
    x.rawInput
      );
      console.log(input);
      return {
        message: "goodbye!",
      };
    }
  ),
});

const createContext: any = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({
  req,
  res,
});

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "https://trill.pics",
      "http://localhost:3000",
    ],
  })
);

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router,
    createContext,
  })
);

const PORT = 3001;

app.listen(PORT, () =>
  console.log(
    `Listening on port ${PORT}.`
  )
);

export { app, createContext };
// Export only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof router;
