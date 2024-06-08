import { FC } from "react";
import { DarkModeProvider } from "@brysonandrew/dark-mode";
import { TChildrenProps } from "@brysonandrew/config-types/dom";
import { ShellGlobalCss } from "~/shell/global/css";
import { GlobalProvidersApi } from "~/shell/global/providers-api";
import { ShellSoundProvider } from "~/shell/global/sound";

type TProps = TChildrenProps;
export const ShellGlobal: FC<
  TProps
> = ({ children }) => {
  return (
    <ShellSoundProvider>
      <DarkModeProvider>
        <ShellGlobalCss />
        <GlobalProvidersApi>
          {children}
        </GlobalProvidersApi>
      </DarkModeProvider>
    </ShellSoundProvider>
  );
};
