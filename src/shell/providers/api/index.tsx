import {QueryProvider} from "./query";
import {TrpcProvider} from "./trpc";

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <TrpcProvider>{children}</TrpcProvider>
    </QueryProvider>
  );
};
