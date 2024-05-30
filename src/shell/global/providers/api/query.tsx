import { TChildrenProps } from "@brysonandrew/config-types";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

export const queryClient =
  new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

export const ProvidersApiQuery = ({
  children,
}: TChildrenProps) => {
  return (
    <QueryClientProvider
      client={queryClient}
    >
      {children}
    </QueryClientProvider>
  );
};
