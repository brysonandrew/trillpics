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

export const useRemotionProps = (
  picVideoInputs: TPicSeriesProps = DEFAULT_INPUT
) => {
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

  return {
    props: {
      ...picVideoInputs,
      pics,
      count,
      seconds,
      isPics: count > 0,
      dimensions,
    },
    ...canvasDimensions,
  };
};
