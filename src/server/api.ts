import express from "express";
import cors from "cors";
import {
  CLIENT_ORIGINS,
  SERVER_PATH,
  API_PORT,
} from "~/constants/api";
import { createContext } from "~/server/context";
import * as trpcExpress from "@trpc/server/adapters/express";
import { router } from "./router";

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
    `Allowed foundations: ${CLIENT_ORIGINS}`
  )
);
