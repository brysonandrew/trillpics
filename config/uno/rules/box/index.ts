import {
  BORDER_RADIUS,
  boxRadius,
} from "~uno/rules/box/radius";
import { boxSize } from "~uno/rules/box/size";

export const BOX_SHADOW_FLAT =
  `inset -4px 4px 7px rgba(22,22,22,0.5),
inset 4px -4px 7px rgba(59,59,59,0.5)` as const;
export const BOX_SHADOW_FLOATING =
  "0 0 1px 1px rgba(255,255,255,0.4)" as const;

export const box = {
  ...boxSize(),
  radius: BORDER_RADIUS,
} as const;
