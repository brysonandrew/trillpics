import {
  createTRPCReact,
  httpBatchLink,
  wsLink,
  createWSClient,

} from "@trpc/react-query";
import { TRouter } from "~/server/router";
import {
  SERVER_PATH,
  API_PORT,
} from "~/constants/api";
// import { createWSClient, wsLink } from '@trpc/client/links/wsLink';

export const trpc =
  createTRPCReact<TRouter>();

const SERVER_ORIGIN = (
  import.meta.env ?? process.env
)._IS_LOCAL
  ? `http://localhost:${API_PORT}`
  : "https://trillpics.onrender.com";

const url = `${SERVER_ORIGIN}${SERVER_PATH}`;
// create persistent WebSocket connection
const wsClient = createWSClient({
  url: `ws://localhost:${API_PORT}`,
});

export const trpcClient =
  trpc.createClient({
    links: [
      wsLink({
        client: wsClient,
      }),
      httpBatchLink({
        url,
      }),
    ],
  });

export const TrpcClientProvider =
  trpc.Provider;
