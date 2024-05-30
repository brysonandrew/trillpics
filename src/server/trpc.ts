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
  .context<any>()
  .create();

export const middleware = t.middleware;
export const publicProcedure =
  t.procedure;
export const router = t.router