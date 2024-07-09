import { CSSProperties } from "@emotion/serialize";
import {
  boxR,
  boxRB,
  boxRT,
} from "~/utils/box/r";
import { resolveObjectKeys } from "~/utils/object";

const BORDER_RADIUS = {
  s: 2,
  m: 4,
  l: 8,
  xl: 40,
} as const;

type TBoxRadiusLookupKey =
  keyof typeof BORDER_RADIUS;

type TBoxRadiusLookup = Record<
  TBoxRadiusLookupKey,
  ReturnType<typeof boxR>
>;
type TBoxRadiusTopLookup = Record<
  TBoxRadiusLookupKey,
  ReturnType<typeof boxRT>
>;
type TBoxRadiusBottomLookup = Record<
  TBoxRadiusLookupKey,
  ReturnType<typeof boxRB>
>;
export const RADIUS_LOOKUP: TBoxRadiusLookup =
  resolveObjectKeys(
    BORDER_RADIUS
  ).reduce((a, c) => {
    a[c] = boxR(BORDER_RADIUS[c]);
    return a;
  }, {} as TBoxRadiusLookup);

export const RADIUS_TOP_LOOKUP: TBoxRadiusTopLookup =
  resolveObjectKeys(
    BORDER_RADIUS
  ).reduce((a, c) => {
    a[c] = boxRT(BORDER_RADIUS[c]);
    return a;
  }, {} as TBoxRadiusTopLookup);

export const RADIUS_BOTTOM_LOOKUP: TBoxRadiusBottomLookup =
  resolveObjectKeys(
    BORDER_RADIUS
  ).reduce((a, c) => {
    a[c] = boxRB(BORDER_RADIUS[c]);
    return a;
  }, {} as TBoxRadiusBottomLookup);

export type TBoxRadiusKey =
  TBoxRadiusLookupKey;
export const boxRadius = (
  key: TBoxRadiusKey = "xl"
) => {
  return BORDER_RADIUS[key];
};

export { BORDER_RADIUS };
type TConfig = {
  borderRadius?: TBoxRadiusKey;
};
export const boxBorder = ({
  borderRadius,
}: TConfig) => {
  return {
    ...(borderRadius
      ? {
          borderRadius: boxRadius(
            borderRadius
          ),
        }
      : {}),
  };
};
export type TBoxBorder = ReturnType<
  typeof boxBorder
>;
