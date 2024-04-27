import { useBorderRadiusXl } from "~/store/hooks/core/use-border-radius-xl";

export const BOX_SHADOW_FLAT = `inset -4px 4px 7px rgba(22,22,22,0.5),
inset 4px -4px 7px rgba(59,59,59,0.5)`;
export const BOX_SHADOW_FLOATING =
  "0 0 1px 1px rgba(255,255,255,0.4)";
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
