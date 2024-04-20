import {
  TDimensionsInit,
  TDimensionsReady,
  TDimensions,
} from '@brysonandrew/measure';
import { useMemo } from 'react';

export type TImageDimensions =
  | TDimensionsInit
  | TDimensionsReady;
export type TImageDimensionsConfig = {
  box: TDimensions | null;
  image: TDimensions | null;
};
export const useImageDimensions = ({
  box,
  image,
}: TImageDimensionsConfig): TImageDimensions => {
  const dimensions = useMemo(() => {
    let imageHeight = 0;
    let imageWidth = 0;

    if (box && image) {
      const rectAspect =
        box.width / box.height;
      const imageAspect =
        image.width / image.height;

      if (imageAspect > rectAspect) {
        imageWidth = box.width;
        imageHeight =
          box.width / imageAspect;
      } else {
        imageWidth =
          box.height * imageAspect;
        imageHeight = box.height;
      }
      return {
        width: ~~imageWidth,
        height: ~~imageHeight,
      };
    } else {
      return null;
    }
  }, [box?.width, box?.height, image]);

  if (dimensions === null) {
    return { isDimensions: false };
  }
  return {
    isDimensions: true,
    ...dimensions,
  };
};
