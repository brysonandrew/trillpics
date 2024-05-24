import { FC } from "react";
import { DarkModeProvider } from "@brysonandrew/dark-mode";
import { NetworkProvider } from "@brysonandrew/network";
import { TChildrenProps } from "@brysonandrew/config-types/dom";
import { TCustomStyle } from "~app/style";
import { VirtualizeContextProvider } from "~/context";

export type TApp = TCustomStyle;
type TProps = TChildrenProps;
export const Providers: FC<TProps> = ({
  children,
}) => {
  return (
    <VirtualizeContextProvider>
      <NetworkProvider>
        <DarkModeProvider>
          {children}
        </DarkModeProvider>
      </NetworkProvider>
    </VirtualizeContextProvider>
  );
};
