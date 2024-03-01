import { COLOR_RECORD } from '../color';
import { TDefaultStyle } from '@brysonandrew/app';
import { BORDER_RADIUS } from './border-radius';

export const CUSTOM_STYLE = {
  BORDER_RADIUS,
  COLOR: COLOR_RECORD,
} as const;
export type TCustomStyle =
  typeof CUSTOM_STYLE;
export type TStyle = TDefaultStyle &
  TCustomStyle;
