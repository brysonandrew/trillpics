import { COLOR_RECORD } from '../color';

export const CUSTOM_STYLE = {
  COLOR: COLOR_RECORD,
} as const;
export type TCustomStyle =
  typeof CUSTOM_STYLE;
export type TStyle = 
  TCustomStyle;
