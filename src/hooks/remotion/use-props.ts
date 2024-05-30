import { useMemo } from "react";
import {
  DIMENSIONS,
  PIC_DIMENSIONS,
} from "~/constants/remotion";
import { useTrillPicsStore } from "~/store/middleware";
import { DEFAULT_INPUT } from "~/pages/video/player/_controls/download";
import { resolvePicRandoms } from "~/hooks/pic/randoms";
import { dimensionsWithinPlayerBounds } from "~/hooks/within-player-bounds";
import { resolveSecondsFromCount } from "~/hooks/pic/video/read/seconds/from-count";
import { useContextPlayer_Init } from "~/pages/video/player/_context/init";

export const useRemotionProps = (
  picVideoInputs = DEFAULT_INPUT[
    "input"
  ]
) => {
  const { fps } =
    useContextPlayer_Init();
  const { pics: allPics } =
    useTrillPicsStore(({ pics }) => ({
      pics,
    }));
  const canvasDimensions = DIMENSIONS;
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
    picVideoInputs.seconds ||
    resolveSecondsFromCount(count);
  const durationInFrames =
    seconds * fps;

  return {
    durationInFrames,
    fps,
    props: {
      pics,
      count,
      seconds,
      isPics: count > 0,
      dimensions,
    },
    ...canvasDimensions,
  };
};
