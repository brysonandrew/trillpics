import {
  TAllParams,
  TAllParamsKey,
  TModulatorParamKey,
} from "~/pages/video/music/synth/nodes/modulators/types";

export type TModulatorNodes = {
  oscillator: OscillatorNode;
  gain: GainNode;
};

export type TModulatorOptions =
  OscillatorOptions & GainOptions;
export type TModulatorCreate = (
  options: TModulatorOptions
) => TModulatorNodes;

export type TModulatorRecycle = (
  oscillator: OscillatorNode,
  gain: GainNode
) => TModulatorOptions;

export type TModulatorCreateParameters =
  Parameters<TModulatorCreate>;
export type TModulatorRef =
  TModulatorNodes & {
    reconnect(
      param?: AudioParam
    ): TModulatorNodes;
    disconnect(): void;
    isStarted?: boolean;
    multiplier: {
      gain: number;
      frequency: number;
    };
  };

export type TModulatorId =
  `${string}.${TAllParamsKey}`;
export type TModulatorConnect = (
  param: AudioParam,
  id: string|TModulatorId,
  options?: TModulatorOptions
) => TModulatorRef & TModulatorNodes;

export type TModulatorRefs = Record<
  string,
  TModulatorRef
>;

export type TModulator = {
  connect: TModulatorConnect;
  recycle: TModulatorRecycle;
  refs: TModulatorRefs;
};
