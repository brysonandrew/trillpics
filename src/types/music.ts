import type { MutableRefObject } from "react";

export type TIndexRef =
  MutableRefObject<number>;

export type TEnd = number | null;
export type TPlayHandler<T> = (
  config: TRunPlayConfig<T>
) => TEnd;

export type TIntervalRecord = {
  a: number;
  d: number;
  s: number;
  r: number;
  e: TEnd;
};
export type TMidi = number | null;
export type TNodes = TMidi[];

export type TNextMidi =
  | number
  | (number | null)[]
  | null;

export type TFrequencies = TNodes;

export type TInitConfig = {
  context: AudioContext;
};

export type TCreateConfig = TInitConfig;

export type TInitPlayConfig =
  TInitConfig & {
    gi: GainNode;
    currName: string;
    onEnd?(): void;
  };

export type TRunPlayConfig<T> = {
  ref: T;
  ms: TNodes;
  intervalRecord: TIntervalRecord;
  gain: number;
};

export type TBaseScheduleConfig = {
  length: number;
  t: number;
  speed: number;
};

export type TScheduleConfig =
  TBaseScheduleConfig;

export type TNodesConfig = {
  midis: TNodes;
};

export type TTracksHandlerConfig =
  TInitConfig;
