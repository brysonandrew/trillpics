import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import { OSCILLATOR_KEY, OSCILLATOR_NUMBER_OPTIONS } from "~/pages/video/music/synth/nodes/oscillator/constants";

export type TOscillatorNumberOptions =
  typeof OSCILLATOR_NUMBER_OPTIONS;
export type TOscillatorKey =
  typeof OSCILLATOR_KEY;
export type TOscillatorNumberOptionsKey =
  keyof TOscillatorNumberOptions;

export type TOscillatorOptions =
  TOscillatorNumberOptions & {
    type: OscillatorType;
  };
export type TOscillatorParams = [
  TOscillatorNumberOptionsKey,
  AudioParam,
  TUpdateNumberHandler
][];

export type TOscillatorConfig = {
  type: "oscillator";
  params: TOscillatorParams;
};
