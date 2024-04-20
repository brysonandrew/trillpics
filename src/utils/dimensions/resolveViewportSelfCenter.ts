import { TDimensions } from '@brysonandrew/measure';

export const resolveViewportSelfCenter =
  (
    viewport: TDimensions,
    dimensions: TDimensions,
    scrollY = 0,
  ) => {
    return {
      left:
        (viewport.width -
          dimensions.width) *
        0.5,
      top:
        (viewport.height -
          dimensions.height) *
          0.5 +
        scrollY,
      width: dimensions.width,
      height: dimensions.height,
    };
  };
