import { useApp } from "@brysonandrew/app";
const BOX_SHADOW = `inset -4px 4px 7px rgba(22,22,22,0.5),
inset 4px -4px 7px rgba(59,59,59,0.5)`;

export const useBorderStyleMd = (
  isFlat?: boolean,
  size = "2.5rem"
) => {
  const { BORDER_RADIUS } = useApp();
  return {
    borderRadius: BORDER_RADIUS.XL,
    // width: size,
    // height: size,
    minWidth: size,
    minHeight: size,
    ...(isFlat
      ? {
          boxShadow: BOX_SHADOW,
        }
      : {
          boxShadow:
            "0 0 1px 1px rgba(255,255,255,0.1)",
        }),
  };
};
