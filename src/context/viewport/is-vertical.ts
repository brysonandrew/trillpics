import { TViewport } from "@brysonandrew/viewport";
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
