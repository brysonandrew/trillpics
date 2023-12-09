import { TElementProps } from "@t/dom";
import { TClassValueProps } from "@t/index";

export type TTextProps = TElementProps &
  TClassValueProps & {
    element?: keyof JSX.IntrinsicElements;
  };
