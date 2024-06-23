export const DEFAULT_MIDIS_SLIDER_OPTIONS =
  {
    gain: 1,
    frequency: 22,
    detune: 0,
    delayTime: 0.99,
  };

export const DEFAULT_MIDIS_OPTIONS = {
  type: "sawtooth" as const,
  ...DEFAULT_MIDIS_SLIDER_OPTIONS,
} as const;