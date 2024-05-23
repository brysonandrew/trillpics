import { useBorderRadiusXl } from "~/store/hooks/core/use-border-radius-xl";
import { BOX_SHADOW_FLAT, BOX_SHADOW_FLOATING } from "~/store/slices/core/state";

export const useBorderStyleMd = (
  isFlat?: boolean,
  size = "2.5rem"
) => {
  const borderRadius =
    useBorderRadiusXl();
  return {
    borderRadius,
    minWidth: size,
    minHeight: size,
    ...(isFlat
      ? {
          boxShadow: BOX_SHADOW_FLAT,
        }
      : {
          boxShadow: BOX_SHADOW_FLOATING,
        }),
  };
};
