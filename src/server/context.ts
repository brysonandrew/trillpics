import { MaybePromise } from "@trpc/server";
import { CreateWSSContextFnOptions } from "@trpc/server/adapters/ws";
//: trpcExpress.CreateExpressContextOptions
export const createContext = (opts:MaybePromise<any>) => (opts);
export const createWsContext = (opts: CreateWSSContextFnOptions) => (opts);
