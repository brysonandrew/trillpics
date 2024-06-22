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
import { TPicSeriesProps } from "~/components/remotion/pic-series/types";
import {
  isNoname,
  isNonameInverted,
} from "~/utils/validation/is/noname";

export const useRemotionProps = (
  picVideoInputs: TPicSeriesProps = DEFAULT_INPUT
) => {
  const {
    pics: allPics,
    fps,
    recording,
    bpm,
  } = useTrillPicsStore(
    ({
      pics,
      fps,
      recording,
      bpm,
    }) => ({
      pics,
      fps,
      recording,
      bpm,
    })
  );
  const canvasDimensions = DIMENSIONS;
  const dimensions =
    dimensionsWithinPlayerBounds({
      canvasDimensions,
      ...PIC_DIMENSIONS,
      fillMode: "cover",
    });
  const pics = useMemo(() => {
    const result = picVideoInputs.isPics
      ? picVideoInputs.pics
      : resolvePicRandoms({
          pics: allPics,
        });

    return result.filter(
      isNonameInverted
    );
  }, [picVideoInputs]);
  const count = pics.length;
  const seconds =
    picVideoInputs.seconds ||
    resolveSecondsFromCount(count, bpm);

  return {
    ...picVideoInputs,
    pics,
    count,
    seconds,
    isPics: count > 0,
    dimensions,
    fps,
    recording,
    canvasDimensions,
  };
};
