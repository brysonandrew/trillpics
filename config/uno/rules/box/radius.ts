import { boxR } from "~/utils/box/r";
import { resolveObjectKeys } from "~/utils/object";

const BORDER_RADIUS = {
  s: 2,
  m: 4,
  l: 8,
  xl: 40,
} as const;


type TBorderRadiusLookup = Record<
  keyof typeof BORDER_RADIUS,
  ReturnType<typeof boxR>
>;
export const RADIUS_LOOKUP: TBorderRadiusLookup =
  resolveObjectKeys(
    BORDER_RADIUS
  ).reduce((a, c) => {
    a[c] = boxR(BORDER_RADIUS[c]);
    return a;
  }, {} as TBorderRadiusLookup);

export type TBoxRadiusKey =
  keyof typeof BORDER_RADIUS;
export const boxRadius = (
  key: TBoxRadiusKey = "xl"
) => {
  return BORDER_RADIUS[key];
};

export {BORDER_RADIUS}
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
