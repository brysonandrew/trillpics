import { FREQUENCY_TITLE } from "~/pages/video/music/synth/nodes/constants";

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
export const BIQUAD_FILTER_SILDER_PARAMS =
  {
    frequency: "frequency",
    Q: "Q",
    detune: "detune",
  } as const;

  export const BIQUAD_FILTER_SILDER_TITLES =
  {
...FREQUENCY_TITLE,
    Q: "Q",
    detune: "detune",
  } as const;

export const BIQUAD_FILTER_PARAMS = {
  type: "type",
  ...BIQUAD_FILTER_SILDER_PARAMS,
} as const;
