import { OSCILLATOR_NUMBER_OPTIONS } from "~/pages/video/music/synth/nodes/oscillator/constants";

export type TOscillatorNumberOptions = typeof OSCILLATOR_NUMBER_OPTIONS

export type TOscillatorNumberOptionsKey =
  keyof TOscillatorNumberOptions;
  
export type TOscillatorOptions =
  TOscillatorNumberOptions & {
    type: OscillatorType;
  };
