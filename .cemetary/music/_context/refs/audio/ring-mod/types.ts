import { RING_MOD_KEY } from "~/pages/video/music/_context/refs/audio/ring-mod";

export type TRingModOptions = {
  gain: number;
  rate: number;
  blend: number;
  waveform: number;
};
export type TRingModParamsKey =
  keyof TRingModOptions;

export type TRingModCreate = (
  options: TRingModOptions
) => AudioWorkletNode;
export type TRingModRecycle = (
  node: AudioWorkletNode
) => TRingModOptions;
export type TRingModstart = (
  startTime?: number
) => void;
export type TRingModEnd = (
  endTime?: number
) => void;
export type TRingMod = {
  isStarted: boolean;
  node: AudioWorkletNode;
  output: AudioNode;
  start: TRingModstart;
  end: TRingModEnd;
};
export type TRingModRefs = Record<
  string,
  TRingMod
>;
export type TRingModConnect = (
  node: AudioNode,
  options?: TRingModOptions
) => TRingMod;

export type TRingMods = {
  key: TRingModKey;
  recycle: TRingModRecycle;
  create: TRingModCreate;
  refs: TRingModRefs;
  connect: TRingModConnect;
};

export type TRingModKey =
  typeof RING_MOD_KEY;
