import { TScaleOptions } from "~/pages/video/music/synth/scale/types";
import { DEFAULT_SCALE_KEY, DEFAULT_SCALE_DELTA, DEFAULT_SCALE_PATTERN } from "~/pages/video/music/_context/init/constants";

export const DEFAULT_SCALE_OPTIONS: TScaleOptions =
  {
    key: DEFAULT_SCALE_KEY,
    delta: DEFAULT_SCALE_DELTA,
    pattern: DEFAULT_SCALE_PATTERN,
  };
  export const SCALE_PATTERNS = [
    "asc",
    "desc",
    "random",
    "hill",
    "valley",
    "alternating",
  ] as const;
  