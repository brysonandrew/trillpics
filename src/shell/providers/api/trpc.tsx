import { ReactNode } from "react";
import {
  trpcClient,
  TrpcClientProvider,
} from "~/utils/trpc";
import { queryClient } from "./query";

export const ProvidersApiTrpc = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <TrpcClientProvider
      client={trpcClient}
      queryClient={queryClient}
    >
      {children}
    </TrpcClientProvider>
  );
};
