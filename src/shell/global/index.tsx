import { FC } from "react";
import { DarkModeProvider } from "@brysonandrew/dark-mode";
import { NetworkProvider } from "@brysonandrew/network";
import { TChildrenProps } from "@brysonandrew/config-types/dom";
import { ShellGlobalCss } from "~/shell/global/css";
import { GlobalProvidersApi } from "~/shell/global/providers/api";
import { ShellGlobalBackground } from "~/shell/global/background";
import { ShellSoundProvider } from "~/shell/global/sound";

type TProps = TChildrenProps;
export const ShellGlobal: FC<
  TProps
> = ({ children }) => {
  return (
    <ShellSoundProvider>
      <NetworkProvider>
        <DarkModeProvider>
          <ShellGlobalCss />
          <ShellGlobalBackground />
          <GlobalProvidersApi>
            {children}
          </GlobalProvidersApi>
        </DarkModeProvider>
      </NetworkProvider>
    </ShellSoundProvider>
  );
};
