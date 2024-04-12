
import * as trpcExpress from "@trpc/server/adapters/express";

export const createContext: any = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({
  req,
  res,
});