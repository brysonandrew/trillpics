import { TCoreBoxState } from "~/store/slices/core/types";
import { TStateHandler } from "~/store/types";
import { BORDER_RADIUS } from "~app/style/border-radius";

export const DEFAULT_SIZE = "2.5rem";
export const BOX_SHADOW_FLAT =
  `inset -4px 4px 7px rgba(22,22,22,0.5),
inset 4px -4px 7px rgba(59,59,59,0.5)` as const;
export const BOX_SHADOW_FLOATING =
  "0 0 1px 1px rgba(255,255,255,0.4)" as const;

export const coreBoxState: TStateHandler<
  TCoreBoxState
> = (...args) => ({
  box: {
    borderRadius: BORDER_RADIUS.XL,
    floating: {
      boxShadow: BOX_SHADOW_FLOATING,
    },
    flat: {
      boxShadow: BOX_SHADOW_FLAT,
    },
    size: {
      md: DEFAULT_SIZE,
      sm: "2rem",
      minWidth: DEFAULT_SIZE,
      minHeight: DEFAULT_SIZE,
    },
  },
});
