import { FC } from "react";
import { DarkModeProvider } from "@brysonandrew/dark-mode";
import { TChildrenProps } from "@brysonandrew/config-types/dom";
import { ShellGlobalCss } from "~/shell/global/css";

type TProps = TChildrenProps;
export const ShellGlobal: FC<
  TProps
> = ({ children }) => {
  return (
    <DarkModeProvider>
      <ShellGlobalCss />
      {children}
    </DarkModeProvider>
  );
};
