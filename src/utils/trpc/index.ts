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

const isLocal = (
  import.meta.env ?? process.env
)._IS_LOCAL;
const PROD_ORIGIN =
  "://trillpics.onrender.com";
const DEV_ORIGIN = `://localhost:${API_PORT}` as const;
const SERVER_ORIGIN = isLocal
  ? `http${DEV_ORIGIN}` as const
  : `https${PROD_ORIGIN}` as const;

const url = `${SERVER_ORIGIN}${SERVER_PATH}`;

const WS_SERVER_ORIGIN =
  isLocal
    ? `ws${DEV_ORIGIN}` as const
    : `wss${PROD_ORIGIN}` as const;

const wsClient = createWSClient({
  url: WS_SERVER_ORIGIN,
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
