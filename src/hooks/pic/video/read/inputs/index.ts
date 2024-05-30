import { TPicSeriesProps } from "~/components/remotion/pic-series/types";
import { PIC_DIMENSIONS } from "~/constants/remotion";
import {
  SECONDS_PARAM_KEY,
  SELECTED_PARAM_KEY,
} from "~/hooks/pic/constants";
import { resolveSecondsFromCount } from "~/hooks/pic/video/read/seconds/from-count";

export const picVideoReadInputs = (
  searchParams: URLSearchParams,
  fps: number
): TPicSeriesProps => {
  const seconds = Number(
    searchParams.get(SECONDS_PARAM_KEY)
  );
  const pics = searchParams.getAll(
    SELECTED_PARAM_KEY
  );
  const count = pics.length;
  const isPics = count > 0;
  return {
    seconds:
      seconds ||
      resolveSecondsFromCount(count),
    pics,
    count,
    isPics,
    dimensions: PIC_DIMENSIONS,
    fps,
    durationInFrames: fps * seconds,
  };
};
