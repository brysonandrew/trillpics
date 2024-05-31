import { MaybePromise } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { CreateWSSContextFnOptions } from "@trpc/server/adapters/ws";
//: trpcExpress.CreateExpressContextOptions
export const createContext = (opts:MaybePromise<any>) => (opts);
export const createWsContext = (opts: CreateWSSContextFnOptions) => (opts);
