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

  export const BIQUAD_FILTER_PARAMS  = {
    frequency: "frequency",
    Q:"Q",
    type: "type",
    detune: "detune"
  } as const