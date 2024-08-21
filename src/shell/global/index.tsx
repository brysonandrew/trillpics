import { FC } from "react";
import { DarkModeProvider } from "@brysonandrew/dark-mode";
import { TChildrenProps } from "@brysonandrew/config-types/dom";
import { ShellGlobalCss } from "~/shell/global/css";
import { GlobalProvidersApi } from "~/shell/global/providers-api";

type TProps = TChildrenProps;
export const ShellGlobal: FC<
  TProps
> = ({ children }) => {
  return (
    <DarkModeProvider>
      <ShellGlobalCss />
      {/* <GlobalProvidersApi>
        </GlobalProvidersApi> */}
      {children}
    </DarkModeProvider>
  );
};
