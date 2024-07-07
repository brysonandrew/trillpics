import { FREQUENCY_TITLE } from "~/pages/video/music/_context/refs/audio/constants";
import { resolveObjectKeys } from "~/utils/object";

export const BIQUAD_KEY = "biquad"


export const BIQUAD_FILTER_TYPES: readonly BiquadFilterType[] =
  [
    "allpass",
    "bandpass",
    "highpass",
    "highshelf",
    "lowpass",
    "lowshelf",
    "notch",
    "peaking",
  ] as const;
export const BIQUAD_FILTER_PARAM_KEYS =
  {
    frequency: "frequency",
    Q: "Q",
    detune: "detune",
  } as const;

export const BIQUAD_FILTER_NUMBER_TITLES =
  {
    ...FREQUENCY_TITLE,
    Q: "Q",
    detune: "detune",
  } as const;

export const BIQUAD_FILTER_OPTIONS = {
  type: "type",
  ...BIQUAD_FILTER_PARAM_KEYS,
} as const;

export const BIQUAD_FILTER_PARAMS =
  resolveObjectKeys(
    BIQUAD_FILTER_PARAM_KEYS
  );
