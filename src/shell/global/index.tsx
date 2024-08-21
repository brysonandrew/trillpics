import { FC } from "react";
import { DarkModeProvider } from "@brysonandrew/dark-mode";
import { TChildrenProps } from "@brysonandrew/config-types/dom";

type TProps = TChildrenProps;
export const ShellGlobal: FC<
  TProps
> = ({ children }) => {
  return (
    <DarkModeProvider>
      {children}
    </DarkModeProvider>
  );
};
