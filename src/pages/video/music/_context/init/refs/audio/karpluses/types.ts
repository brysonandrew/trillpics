import { TKarplusStrongOptions } from "~/pages/video/music/synth/nodes/worklets/karplus-strong/types";

export type TKarplusCreate = (
  options: TKarplusStrongOptions
) => AudioWorkletNode;
export type TKarplusRecycle = (
  node: AudioWorkletNode
) => TKarplusStrongOptions;
export type TKarplusEnd = (
  endTime: number
) => void;
export type TKarplus = {
  node: AudioWorkletNode;
  end: TKarplusEnd;
  output: AudioNode;
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
