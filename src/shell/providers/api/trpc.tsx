import { trpc } from "@/utils/trpc";
import { httpBatchLink } from "@trpc/client";
import { ReactNode } from "react";
import { queryClient } from "./query";

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: `${
        import.meta.env
          .VITE_TRPC_SERVER_URL
      }`,
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
