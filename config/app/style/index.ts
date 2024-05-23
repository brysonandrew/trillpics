import { COLOR_RECORD } from '../color';
import { TDefaultStyle } from '@brysonandrew/app';

export const CUSTOM_STYLE = {
  COLOR: COLOR_RECORD,
} as const;
export type TCustomStyle =
  typeof CUSTOM_STYLE;
export type TStyle = TDefaultStyle &
  TCustomStyle;
