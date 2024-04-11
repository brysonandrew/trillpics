import {
  SERVER_PATH,
  SERVER_PORT,
} from "@/constants/api";
import { trpc } from "@/utils/trpc";
import { httpBatchLink } from "@trpc/client";
import { ReactNode } from "react";
import { queryClient } from "./query";

console.log(import.meta)
console.log(process.env)

const SERVER_ORIGIN = import.meta.env
  .DEV
  ? `http://localhost:${SERVER_PORT}`
  : "https://trill-pics.fly.dev";

const url = `${SERVER_ORIGIN}${SERVER_PATH}`;

console.log(url);

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
