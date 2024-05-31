import { FC } from "react";
import { DarkModeProvider } from "@brysonandrew/dark-mode";
import { NetworkProvider } from "@brysonandrew/network";
import { TChildrenProps } from "@brysonandrew/config-types/dom";

type TProps = TChildrenProps;
export const Providers: FC<TProps> = ({
  children,
}) => {
  return (
    <NetworkProvider>
      <DarkModeProvider>
        {children}
      </DarkModeProvider>
    </NetworkProvider>
  );
};
