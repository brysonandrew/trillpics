import { boxI } from "~/utils/box/i";
import { boxIx } from "~/utils/box/ix";
import { boxIy } from "~/utils/box/iy";
import { boxP } from "~/utils/box/p";
import { boxPx } from "~/utils/box/px";
import { boxPy } from "~/utils/box/py";
import { BORDER_RADIUS, RADIUS_BOTTOM_LOOKUP, RADIUS_LOOKUP, RADIUS_TOP_LOOKUP } from "~uno/rules/box/radius";
import { boxSize } from "~uno/rules/box/size";

export const BOX_SHADOW_FLAT =
  `inset -4px 4px 7px rgba(22,22,22,0.5),
inset 4px -4px 7px rgba(59,59,59,0.5)` as const;
export const BOX_SHADOW_FLOATING =
  "0 0 1px 1px rgba(255,255,255,0.4)" as const;

export const box = {
  radius: BORDER_RADIUS,
  r: RADIUS_LOOKUP,
  rt: RADIUS_TOP_LOOKUP,
  rb: RADIUS_BOTTOM_LOOKUP,
  px: boxPx,
  py: boxPy,
  p: boxP,
  i: boxI,
  ix: boxIx,
  iy: boxIy,
  ...boxSize(),
} as const;
