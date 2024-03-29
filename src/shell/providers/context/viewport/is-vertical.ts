import { TViewport } from "@hooks/window/useViewport";

export const isVertical = (
  dimensions: TViewport
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
