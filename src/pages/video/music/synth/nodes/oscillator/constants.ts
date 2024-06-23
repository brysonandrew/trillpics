export const OSCILLATOR_SLIDER_OPTIONS =
  {
    frequency: "frequency",
    detune: "detune",
  };

export const OSCILLATOR_OPTIONS =
  {
    type: "type" as const,
    ...OSCILLATOR_SLIDER_OPTIONS,
  } as const;
