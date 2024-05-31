import express from "express";
import cors from "cors";
import {
  CLIENT_ORIGINS,
  SERVER_PATH,
  API_PORT,
} from "~/constants/api";
import { applyWSSHandler } from "@trpc/server/adapters/ws";
import { WebSocketServer } from "ws";
import * as trpcExpress from "@trpc/server/adapters/express";
import { router } from "./router";
import { createContext } from "~/server/context";

const api = express();
const port = process.env.PORT || API_PORT;

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

const server = api.listen(
  port,
  () =>
    console.log(
      `Listening on port ${port}.`,
      `Allowed foundations: ${CLIENT_ORIGINS}`
    )
);

const wss = new WebSocketServer({
  server,
});
const wsHandler = applyWSSHandler({
  wss,
  router,
  createContext,
});

wss.on("connection", (ws) => {
  console.log(
    `➕➕ Connection (${wss.clients.size})`
  );
  ws.once("close", () => {
    console.log(
      `➖➖ Connection (${wss.clients.size})`
    );
  });
});
process.on("SIGTERM", () => {
  wsHandler.broadcastReconnectNotification();
  wss.close();
  server.close();
});
