import { TDimensions } from "@brysonandrew/config-types";

export const centerInScreen = (
  dimensions: TDimensions,
  screen: TDimensions,
  scrollY = 0
) => {
  return {
    left:
      (screen.width -
        dimensions.width) *
      0.5,
    top:
      (screen.height -
        dimensions.height) *
        0.5 +
      scrollY,
    width: dimensions.width,
    height: dimensions.height,
  };
};
