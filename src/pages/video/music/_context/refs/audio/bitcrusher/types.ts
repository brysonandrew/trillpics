import {
  TBitcrusherNumberOptions,
  TBitcrusherNumberOptionsKey,
} from "~/pages/video/music/synth/nodes/bitcrusher/types";
import { BITCRUSHER_KEY } from "~/pages/video/music/_context/refs/audio/bitcrusher";

export type TBitcrusherOptions =
  TBitcrusherNumberOptions;
export type TBitcrusherOptionsKey =
  TBitcrusherNumberOptionsKey;

export type TBitcrusherCreate = (
  options: TBitcrusherNumberOptions
) => AudioWorkletNode;
export type TBitcrusherRecycle = (
  node: AudioWorkletNode
) => TBitcrusherOptions;
export type TBitcrusherstart = (
  startTime?: number
) => void;
export type TBitcrusherEnd = (
  endTime?: number
) => void;
export type TBitcrusher = {
  isStarted: boolean;
  node: AudioWorkletNode;
  output: AudioNode;
  start: TBitcrusherstart;
  end: TBitcrusherEnd;
};
export type TBitcrusherRefs = Record<
  string,
  TBitcrusher
>;
export type TBitcrusherConnect = (
  node: AudioNode,
  options?: TBitcrusherOptions
) => TBitcrusher;

export type TBitcrushers = {
  key: TBitcrusherKey;
  recycle: TBitcrusherRecycle;
  create: TBitcrusherCreate;
  refs: TBitcrusherRefs;
  connect: TBitcrusherConnect;
};

export type TBitcrusherKey =
  typeof BITCRUSHER_KEY;
