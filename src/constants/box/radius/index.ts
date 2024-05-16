import { BOX } from "~/constants/box";

export const BORDER_RADIUS = {
  s: 2,
  m: 4,
  l: 8,
  xl: 40,
} as const;

export const BOX_RADIUS = {
  ...BORDER_RADIUS,
} as const;
export type TBoxRadiusKey =
  keyof typeof BOX_RADIUS;
export const boxRadius = (
  key: TBoxRadiusKey = "xl"
) => {
  const box = BOX;
  return box.borderRadius[key];
};
