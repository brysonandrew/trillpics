import { TScreen } from "~/shell/init/hooks/measure/measure";

export const isVertical = (
  dimensions: TScreen
) => {
  if (dimensions.isDimensions) {
    return (
      dimensions.width <
        dimensions.height &&
      dimensions.width < 700
    );
  }
  return false;
};
