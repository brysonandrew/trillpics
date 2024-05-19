import { TStrRecord } from "~/types/shapes";

export const OPACITY_RANGE_RGB_RECORD =
  {} as const;

export const DARK_LOGO = {
  yellow: "#f4ba37",
  pink: "#d94c9a",
  blue: "#29abe2",
} as const;

export const LIGHT_LOGO = {
  yellow1: "#ffe54d",
  teal: "#6adbc6",
  pink1: "#ff73c0",
} as const;

export const VARIABLES_RECORD = {
  red: "#f87171",
  ...DARK_LOGO,
  ...LIGHT_LOGO,
} as const;

export type TValues<
  T extends TStrRecord
> = T[keyof T][];
