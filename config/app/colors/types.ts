import { COLOR_RGB_RECORD, TColorKey } from '.';

export type TRgb =
  `${number}, ${number}, ${number}`;
export type TRgbs = TRgb[];
export type TRgba =
  `${TRgb}, ${number}`;

export type TColorVariablesLookup =
  Record<TColorKey, string>;

export type TColorRgbKey =
  keyof typeof COLOR_RGB_RECORD;
