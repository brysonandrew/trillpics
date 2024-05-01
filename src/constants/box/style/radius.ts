import { BOX } from "~/constants/box";
import { BORDER_RADIUS } from "~app/style/border-radius";

export const BOX_RADIUS = {
  ...BORDER_RADIUS,
} as const;
export type TBoxRadiusKey =
  keyof typeof BOX_RADIUS;
export const boxRadius = (
  key: TBoxRadiusKey = "XL"
) => {
  const box = BOX;
  return box.borderRadius[key];
};
