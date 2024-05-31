import { ReactNode } from "react";
import { ProvidersApiQuery } from "./query";
import { ProvidersApiTrpc } from "./trpc";

export const GlobalProvidersApi = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <ProvidersApiQuery>
      <ProvidersApiTrpc>
        {children}
      </ProvidersApiTrpc>
    </ProvidersApiQuery>
  );
};
