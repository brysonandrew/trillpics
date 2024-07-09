import { TSyncValue } from "~/pages/video/music/modulators/dropdowns/sync";
import { TAllParamsKey } from "~/pages/video/music/types";

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
    multiplier: number;
    sync:TSyncValue;
  };

export type TModulatorId =
  `${string}.${TAllParamsKey}`;
export type TModulatorConnect = (
  param: AudioParam,
  id: string|TModulatorId,
  options?: TModulatorOptions
) => TModulatorRef & TModulatorNodes;

export type TModulatorRefs = Record<
  string|TModulatorId,
  TModulatorRef
>;

export type TModulator = {
  speed(value:number):number
  depth(value:number):number;
  connect: TModulatorConnect;
  recycle: TModulatorRecycle;
  refs: TModulatorRefs;
};
