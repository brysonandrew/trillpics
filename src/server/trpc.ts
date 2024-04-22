import { createContext } from "react";
import {
  inferAsyncReturnType,
  initTRPC,
} from "@trpc/server";

export type TApiContext =
  inferAsyncReturnType<
    typeof createContext
  >;

const t = initTRPC
  // .context<TApiContext>()
  .create();

export const middleware = t.middleware;
export const publicProcedure =
  t.procedure;
export const router = t.router