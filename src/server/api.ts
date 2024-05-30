import express from "express";
import cors from "cors";
import {
  CLIENT_ORIGINS,
  SERVER_PATH,
  API_PORT,
} from "~/constants/api";
import { createContext } from "~/server/cc";
import http from "http";
import { applyWSSHandler } from "@trpc/server/adapters/ws";
import { WebSocketServer } from "ws";
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

// console.log('✅ WebSocket Server listening on ws://localhost:3001');

// import { createServer } from 'node:http';
// import { parse } from 'node:url';

// const handle = api.getRequestHandler();

// void app.prepare().then(() => {
//   const server = createServer(async (req, res) => {
//     if (!req.url) return;
//     const parsedUrl = parse(req.url, true);
//     await handle(req, res, parsedUrl);
//   });

// api.on('upgrade', (req:any, socket:any, head:any) => {
//   wss.handleUpgrade(req, socket as Socket, head, (ws) => {
//     wss.emit('connection', ws, req);
//   });
// });

// Keep the next.js upgrade handler from being added to our custom server
// so sockets stay open even when not HMR.

const server = api.listen(
  API_PORT,
  () =>
    console.log(
      `Listening on port ${API_PORT}.`,
      `Allowed foundations: ${CLIENT_ORIGINS}`
    )
);
// ws server
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
