import { TGraphAudioNode } from "~/pages/video/music/_context/refs/audio/graph/types";
import { NOISE_KEYS } from "~/pages/video/music/_context/refs/audio/noises";

export type TNoiseOptions = {
  gain: number;
};
export type TNoiseOptionsKey =
  keyof TNoiseOptions;
export type TNoiseCreate = (
  key: TNoiseKey,
  options?: TNoiseOptions
) => AudioWorkletNode;
export type TNoiseRecycle = (
  node: AudioWorkletNode
) => TNoiseOptions;
export type TNoiseStart = (
  startTime?: number
) => void;
export type TNoiseEnd = (
  endTime?: number
) => void;
export type TNoise = {
  isStarted: boolean;
  node: AudioWorkletNode;
  output: AudioNode;
  start: TNoiseStart;
  end: TNoiseEnd;
};
export type TNoiseRefs = Record<
  string,
  TNoise
>;
export type TNoiseConnect = (
  key: TNoiseKey,
  node: TGraphAudioNode,
  options?: TNoiseOptions
) => TNoise;

export type TNoises = {
  keys: readonly TNoiseKey[];
  recycle: TNoiseRecycle;
  create: TNoiseCreate;
  refs: TNoiseRefs;
  connect: TNoiseConnect;
};

export type TNoiseKeys =
  typeof NOISE_KEYS;
export type TNoiseKey =
  TNoiseKeys[number];
