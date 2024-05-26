import { FC } from "react";
import { DarkModeProvider } from "@brysonandrew/dark-mode";
import { NetworkProvider } from "@brysonandrew/network";
import { TChildrenProps } from "@brysonandrew/config-types/dom";
import { TCustomStyle } from "~app/style";
import { TScreen } from "~/shell/init/measure";

type TReadyScreen = Extract<
  TScreen,
  { isDimensions: true }
>;
export type TApp = TCustomStyle & {
  screen: TReadyScreen;
};
type TProps = TChildrenProps;
export const Providers: FC<TProps> = ({
  children,
}) => {
  return (
    // <VirtualizeContextProvider>
    <NetworkProvider>
      <DarkModeProvider>
        {children}
      </DarkModeProvider>
    </NetworkProvider>
    // </VirtualizeContextProvider>
  );
};
