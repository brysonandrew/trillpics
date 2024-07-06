import { TKarplusStrongOptions } from "~/pages/video/music/synth/nodes/karplus/types";
import { TNoise } from "~/pages/video/music/_context/refs/audio/noises/types";

export type TKarplusCreate = (
  options: TKarplusStrongOptions
) => AudioWorkletNode;
export type TKarplusRecycle = (
  node: AudioWorkletNode
) => TKarplusStrongOptions;
export type TKarplusStart = (
  startTime?: number
) => void;
export type TKarplusEnd = (
  endTime?: number
) => void;
export type TKarplus = {
  node: AudioWorkletNode;
  input: TNoise;
  output: AudioNode;
  isStarted: boolean
  start: TKarplusStart;
  end: TKarplusEnd;
};
export type TKarplusRefs = Record<
  string,
  TKarplus
>;
export type TKarplusConnect = (
  node: AudioNode
) => TKarplus;
export type TKarpluses = {
  key: "karplus";
  recycle: TKarplusRecycle;
  create: TKarplusCreate;
  refs: TKarplusEnd;
  connect: TKarplusConnect;
};
