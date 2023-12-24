import type { FC } from "react";
import type { TContext } from "./types";
import { DarkMode } from ".";

type TConsumerProps = {
  children(
    values: TContext
  ): JSX.Element;
};
export const Consumer: FC<
  TConsumerProps
> = ({ children }) => (
  <DarkMode.Consumer>
    {children}
  </DarkMode.Consumer>
);
