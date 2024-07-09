import { BEATS_KEYS } from "~/hooks/music/beats/constants";

export type TBeatsKeys = typeof BEATS_KEYS;
export type TBeatsKey = TBeatsKeys[number];
export type TBeatValue =
  | null
  | 1
  | number;

export type TBeatValues =
  readonly TBeatValue[];
export type TBeatsRecord = Record<
  TBeatsKey,
  TBeatValues
>;
export type TBeatsPresetRecord = Record<
  string,
  Partial<TBeatsRecord>
>;
export type TPlayBeatsOptions = {
  volume?: number;
  version?: number;
  stepIndex?: number;
  loopIndex?:number
  playbackRate?: number;
};

export type TBeatsStepsKeys =
  typeof BEATS_KEYS;
export type TBeatsStepsKey =
  TBeatsStepsKeys[number];
