import { TPicSeriesProps } from "~/components/remotion/pic-series/types";
import { PIC_DIMENSIONS } from "~/constants/remotion";
import {
  AUDIO_SRC_KEY,
  AUDIO_START_PARAM_KEY,
  QUERY_PARAM_KEYS,
  SECONDS_PARAM_KEY,
  SELECTED_PARAM_KEY,
} from "~/hooks/pic/constants";
import { resolveVideoReadAudio } from "~/hooks/pic/video/read/audio";
import { resolveSecondsFromCount } from "~/hooks/pic/video/read/seconds/from-count";
import { isNonameInverted } from "~/utils/validation/is/noname";

export const picVideoReadInputs = (
  searchParams: URLSearchParams,
  fps: number,
  bpm = 60
): TPicSeriesProps => {
  const pics = searchParams
    .getAll(SELECTED_PARAM_KEY)
    .filter(isNonameInverted);

  const audio = resolveVideoReadAudio(searchParams);
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
    audio,
  };
};
