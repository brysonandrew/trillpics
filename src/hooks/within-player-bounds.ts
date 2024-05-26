import { TDimensions } from "@brysonandrew/config-types";

export type TDimensionsWithinPlayerBoundsOptional =
  {
    fillMode?: "cover" | "contain";
    canvasDimensions: TDimensions;
  };
type TConfig =
  TDimensionsWithinPlayerBoundsOptional &
    TDimensions;
export const dimensionsWithinPlayerBounds =
  ({
    width: w,
    height: h,
    fillMode = "contain",
    canvasDimensions: {
      width: canvasWidth,
      height: canvasHeight,
    },
  }: TConfig) => {
    const width = w;
    const height = h;
    const imageAspectRatio =
      width / height;
    // I want to scale the image to fit the canvas, but I want to keep the aspect ratio
    // So I need to find the smallest dimension of the canvas, and scale the image to that
    // const smallestCanvasDimension =
    //   fillMode === 'cover'
    //     ? Math.max(canvasWidth, canvasHeight)
    //     : Math.min(canvasWidth, canvasHeight);
    // const scaledWidth = smallestCanvasDimension * scale;
    // const scaledHeight = scaledWidth / imageAspectRatio;

    let scaledHeight = 0;
    let scaledWidth = 0;
    const rectAspect =
      canvasWidth / canvasHeight;
    const imageAspect = width / height;

    const condition =
      fillMode === "contain"
        ? imageAspect > rectAspect
        : imageAspect < rectAspect;
    if (condition) {
      scaledWidth = canvasWidth;
      scaledHeight =
        canvasWidth / imageAspect;
    } else {
      scaledWidth =
        canvasHeight * imageAspect;
      scaledHeight = canvasHeight;
    }

    scaledWidth = Math.floor(
      scaledWidth
    );
    scaledHeight = Math.floor(
      scaledHeight
    );

    const topLeftPosition =
      fillMode === "cover"
        ? {
            left:
              (canvasWidth -
                scaledWidth) *
              0.5,
            top:
              (canvasHeight -
                scaledHeight) *
              0.5,
          }
        : {
            left: 0,
            top: 0,
          };
    return {
      width: scaledWidth,
      height: scaledHeight,
      ...topLeftPosition,
    };
  };
