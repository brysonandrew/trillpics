import {
  BASE_RGBS_RECORD,
  resolveColorRecords,
  TBaseColorRecord,
  TRgbSeriesRecord,
} from "@brysonandrew/color-base";
import {
  BLACK_RGBS,
  WHITE_RGBS,
} from "@brysonandrew/color-grayscale";
import {
  OPACITY_RANGE_RGB_RECORD,
  VARIABLES_RECORD,
} from "./config/constants";
import { TVariablesRecord } from "./config/types";

const RGB_RECORD = {
  ...OPACITY_RANGE_RGB_RECORD,
  ...BASE_RGBS_RECORD,
  dark: BLACK_RGBS[2],
  light: WHITE_RGBS[2],
  // primary: "#f4ba37",
  // secondary: "#d94c9a",
  // accent: "#29abe2",
} as const;

type TRgbRecord = typeof RGB_RECORD;

const colorRecords =
  resolveColorRecords<
    TRgbRecord,
    TVariablesRecord
  >(RGB_RECORD, VARIABLES_RECORD);
type TColorRecord = TVariablesRecord &
  typeof opacityRangeColorRecord &
  TBaseColorRecord &
  TRgbSeriesRecord<"white"> &
  TRgbSeriesRecord<"gray"> &
  TRgbSeriesRecord<"black">;
export type TColorKey =
  | keyof TColorRecord;

const {
  colorRecord,
  colorCssVariablesRecord,
  colorVarsCss,
  opacityRangeColorRecord,
} = colorRecords;

// export type Record<TColorKey, string>;
export const COLOR_RECORD = colorRecord;
export const COLOR_VARS_RECORD =
  colorCssVariablesRecord;
export const COLOR_VARS_CSS =
  colorVarsCss;
export const COLOR_SHADE_RECORD =
  opacityRangeColorRecord;

export const GLOW_DROP = {};
export const GLOW_BOX = {};
