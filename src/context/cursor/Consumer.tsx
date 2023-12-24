import type { FC } from "react";
import type { TContext } from "./types";
import { Cursor } from ".";

type TConsumerProps = {
  children(
    values: TContext
  ): JSX.Element;
};
export const Consumer: FC<
  TConsumerProps
> = ({ children }) => (
  <Cursor.Consumer>
    {children}
  </Cursor.Consumer>
);
