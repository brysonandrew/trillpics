import { ECustomWave, CUSTOM_WAVES } from "~/hooks/music/midis/oscillators/constants";
import { TInitConfig } from "~/types/music";

export type TOscillatorNodeKey = keyof Pick<
  OscillatorNode,
  "frequency" | "detune"
>;
export type TOConfig = TInitConfig &
  Partial<
    Record<TOscillatorNodeKey, number> & {
      type?: OscillatorType;
    }
  > & {
    wave?: ECustomWave;
  };


export type TPeriodicWaveParams = PeriodicWaveOptions
export type TWaveLookup = Record<
  string,
  TPeriodicWaveParams | null
>;
export type TCustomWaveKey = typeof CUSTOM_WAVES[number];

export type TWaveKey =  TCustomWaveKey;

