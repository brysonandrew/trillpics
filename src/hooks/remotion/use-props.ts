import { useMemo } from "react";
import {
  DIMENSIONS,
  PIC_DIMENSIONS,
} from "~/constants/remotion";
import { useTrillPicsStore } from "~/store/middleware";
import { DEFAULT_INPUT } from "~/pages/video/player/_header/download";
import { resolvePicRandoms } from "~/hooks/pic/randoms";
import { dimensionsWithinPlayerBounds } from "~/hooks/within-player-bounds";

export const useRemotionProps = (
  picVideoInputs = DEFAULT_INPUT[
    "input"
  ]
) => {
  const { fps, pics: allPics } =
    useTrillPicsStore(
      ({ fps, pics }) => ({
        fps,
        pics,
      })
    );
    const canvasDimensions= DIMENSIONS
  const dimensions =
    dimensionsWithinPlayerBounds({
      canvasDimensions,
      ...PIC_DIMENSIONS,
      fillMode: "cover",
    });
  const pics = useMemo(() => {
    return picVideoInputs.isPics
      ? picVideoInputs.pics
      : resolvePicRandoms({
          pics: allPics,
        });
  }, [picVideoInputs]);

  const count = pics.length;
  const seconds =
    picVideoInputs.seconds || count * 2;
  return {
    fps,
    props: {
      pics,
      count,
      seconds,
      isPics: count > 0,
      dimensions
    },
    ...canvasDimensions,
    // ...dimensions
  };
};
