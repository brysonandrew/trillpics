import { TPicSeriesProps } from "~/components/remotion/pic-series/types";
import { PIC_DIMENSIONS } from "~/constants/remotion";
import {
  SECONDS_PARAM_KEY,
  SELECTED_PARAM_KEY,
} from "~/hooks/pic/constants";
import { resolveSecondsFromCount } from "~/hooks/pic/video/read/seconds/from-count";
import { isNonameInverted } from "~/utils/validation/is/noname";

export const picVideoReadInputs = (
  searchParams: URLSearchParams,
  fps: number,
  bpm: number
): TPicSeriesProps => {
  const pics = searchParams.getAll(
    SELECTED_PARAM_KEY
  ).filter(
    isNonameInverted
  );
  const count = pics.length;
  const isPics = count > 0;
  const seconds =
    resolveSecondsFromCount(count, bpm);
  return {
    seconds,
    pics,
    count,
    isPics,
    dimensions: PIC_DIMENSIONS,
    fps,
    durationInFrames: Math.ceil(
      fps * seconds
    ),
  };
};
