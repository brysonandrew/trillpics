import { FC } from "react";
import { DarkModeProvider } from "@brysonandrew/dark-mode";
import { NetworkProvider } from "@brysonandrew/network";
import { TChildrenProps } from "@brysonandrew/config-types/dom";
import {
  CUSTOM_STYLE,
  TCustomStyle,
} from "~app/style";
import { VirtualizeContextProvider } from "~/shell/pics/virtualize/context";
import { AppProvider } from "@brysonandrew/app";
import { AppInit } from "@brysonandrew/app/AppInit";
import {
  APP_DESCRIPTION,
  APP_TITLE,
  APP_VERSION,
} from "~app/base/package";
import { FONTS } from "~app/base/fonts";

export type TApp = TCustomStyle;
const Back = () => <div />;
type TProps = TChildrenProps;
export const Providers: FC<TProps> = ({
  children,
}) => {
  return (
    <AppInit<TCustomStyle>
      style={CUSTOM_STYLE}
      APP_TITLE={APP_TITLE}
      APP_DESCRIPTION={APP_DESCRIPTION}
      APP_VERSION={APP_VERSION}
      FONTS={FONTS as any}
    >
      {(value) => (
        <AppProvider<TCustomStyle>
          {...value}
        >
          <VirtualizeContextProvider>
            <NetworkProvider>
              <DarkModeProvider>
                {children}
              </DarkModeProvider>
            </NetworkProvider>
          </VirtualizeContextProvider>
        </AppProvider>
      )}
    </AppInit>
  );
};
