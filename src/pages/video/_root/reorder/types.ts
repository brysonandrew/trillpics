import {
  TUlProps,
  TLiProps,
  TDivProps,
  TDimensions,
} from "@brysonandrew/config-types";

export type TCommonProps = {
  boxProps: TDivProps;
  itemProps: TLiProps & {style:TDimensions};
};
