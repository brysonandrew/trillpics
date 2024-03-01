import {
  OPACITY_RANGE_RGB_RECORD,
  VARIABLES_RECORD,
} from './config/constants';
import { TVariablesRecord } from './config/types';
import {
  // BASE_GLOW_RECORD,
  // BLACK_RGBS,
  BASE_RGBS_RECORD,
  resolveColorRecords,
  TBaseColorRecord,
  TRgbSeriesRecord,
  // resolveGlowRecord,
  // WHITE_RGBS,
} from '@brysonandrew/color-base';
import {
  BLACK_RGBS,
  WHITE_RGBS,
} from '@brysonandrew/color-grayscale';

const RGB_RECORD = {
  ...OPACITY_RANGE_RGB_RECORD,
  ...BASE_RGBS_RECORD,
  dark: BLACK_RGBS[2],
  light: WHITE_RGBS[8],
  primary: '45, 212, 191',
  secondary: '207, 250, 254',
  accent: '113, 174, 225',
} as const;

type TRgbRecord = typeof RGB_RECORD;

const {
  colorRecord,
  colorCssVariablesRecord,
  colorVarsCss,
  opacityRangeColorRecord,
} = resolveColorRecords<
  TRgbRecord,
  TVariablesRecord
>(RGB_RECORD, VARIABLES_RECORD);
type TColorRecord = TVariablesRecord &
  typeof opacityRangeColorRecord &
  TBaseColorRecord &
  TRgbSeriesRecord<'white'> &
  TRgbSeriesRecord<'gray'> &
  TRgbSeriesRecord<'black'>;
export type TColorKey =
  | keyof TColorRecord;

// export type Record<TColorKey, string>;
export const COLOR_RECORD =
  colorRecord as TColorRecord;
export const COLOR_VARS_RECORD =
  colorCssVariablesRecord;
export const COLOR_VARS_CSS =
  colorVarsCss;
export const COLOR_SHADE_RECORD =
  opacityRangeColorRecord;

export const GLOW_DROP = {};
export const GLOW_BOX = {};
