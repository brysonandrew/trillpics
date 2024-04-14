import { ReactNode } from "react";
import {
  SERVER_PATH,
  API_PORT,
} from "@/constants/api";
import { trpc } from "@/utils/trpc";
import { httpBatchLink } from "@trpc/client";
import { queryClient } from "./query";

const SERVER_ORIGIN = (
  import.meta.env ?? process.env
)._IS_LOCAL
  ? `http://localhost:${API_PORT}`
  : "https://trillpics.onrender.com";

const url = `${SERVER_ORIGIN}${SERVER_PATH}`;

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url,
    }),
  ],
});

const TrpcProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <trpc.Provider
      client={trpcClient}
      queryClient={queryClient}
    >
      {children}
    </trpc.Provider>
  );
};

export { TrpcProvider };
