import { OSCILLATOR_SLIDER_OPTIONS } from "~/pages/video/music/synth/nodes/oscillator/constants";

export type TOscillatorSliderOptions = typeof OSCILLATOR_SLIDER_OPTIONS

export type TOscillatorSliderOptionsKey =
  keyof TOscillatorSliderOptions;
export type TOscillatorOptions =
  TOscillatorSliderOptions & {
    type: OscillatorType;
  };
