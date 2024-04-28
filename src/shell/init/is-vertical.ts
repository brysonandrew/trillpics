import { TScreen } from "~/shell/init/measure";

export const isVertical = (
  dimensions: TScreen
) => {
  const { isDimensions } = dimensions;
  if (isDimensions) {
    return (
      dimensions.width <
        dimensions.height &&
      dimensions.width < 700
    );
  }
  return false;
};
