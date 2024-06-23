export type TOscillatorSliderOptions = {
  gain: number;
  frequency: number;
  detune: number;
  delayTime: number;
};

export type TOscillatorSliderOptionsKey =
  keyof TOscillatorSliderOptions;
export type TOscillatorOptions =
  TOscillatorSliderOptions & {
    type: OscillatorType;
  };
