import {
  createTRPCReact,
  httpBatchLink,
} from "@trpc/react-query";
import { TRouter } from "~/server/router";
import {
  SERVER_PATH,
  API_PORT,
} from "~/constants/api";

export const trpc =
  createTRPCReact<TRouter>();

const SERVER_ORIGIN = (
  import.meta.env ?? process.env
)._IS_LOCAL
  ? `http://localhost:${API_PORT}`
  : "https://trillpics.onrender.com";

const url = `${SERVER_ORIGIN}${SERVER_PATH}`;

export const trpcClient =
  trpc.createClient({
    links: [
      httpBatchLink({
        url,
      }),
    ],
  });

export const TrpcClientProvider =
  trpc.Provider;
