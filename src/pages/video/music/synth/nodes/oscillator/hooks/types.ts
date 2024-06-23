import {
  CUSTOM_WAVES,
  OSCILLATOR_OPTIONS,
} from "~/pages/video/music/synth/nodes/oscillator/hooks/constants";

export type TOscillatorOptions =
  typeof OSCILLATOR_OPTIONS;
export type TOscillatorOptionsKey =
  keyof TOscillatorOptions;


export type TPeriodicWaveParams =
  PeriodicWaveOptions;
export type TWaveLookup = Record<
  string,
  TPeriodicWaveParams | null
>;
export type TCustomWaveKey =
  (typeof CUSTOM_WAVES)[number];

export type TWaveKey = TCustomWaveKey;
