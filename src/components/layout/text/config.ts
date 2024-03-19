import {
  TElementProps,
  TClassValueProps,
} from "@brysonandrew/config-types";

export type TTextProps = TElementProps &
  TClassValueProps & {
    element?: keyof JSX.IntrinsicElements;
  };
