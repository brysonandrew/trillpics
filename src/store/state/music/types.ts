import {
  TSynthOptions,
  TMultiOptions,
} from "react-synthwave";
import { TScaleKey } from "~/constants/scales";
import { TBeatsPresetsKey } from "~/hooks/music/beats/presets/types";
import {
  TBeatValues,
  TBeatsStepsKey,
} from "~/hooks/music/beats/types";
import {
  TMidiValues,
  TMidisStepsKey,
} from "~/hooks/music/midis/types";
import { MUSIC_TYPES } from "~/store/state/music/constants";

export type TMusicKey =
  (typeof MUSIC_TYPES)[number];
export type TStepsKey<
  T extends TMusicKey
> = T extends "beats"
  ? TBeatsStepsKey
  : TMidisStepsKey;

export type UStepsKey =
  | TBeatsStepsKey
  | TMidisStepsKey;

export type USequenceEntry =
  | [TBeatsStepsKey, TBeatValues]
  | [TMidisStepsKey, TMidiValues];

export type TSequenceBeatRecord =
  Record<TBeatsStepsKey, TBeatValues>;
export type TPartialSequenceBeatRecord =
  Partial<TSequenceBeatRecord>;
export type TSequenceMidiRecord =
  Record<TMidisStepsKey, TMidiValues>;
export type TPartialSequenceMidiRecord =
  Partial<TSequenceMidiRecord>;

export type TRecording = {
  src: string;
  seconds: number;
};

export type TScalePattern =
  | "asc"
  | "desc"
  | "random"
  | "hill"
  | "valley"
  | "alternating";

export type TScaleOptions = {
  pattern: TScalePattern;
  delta: number;
  key: TScaleKey;
};

export type TSequenceOptions = {
  beats?: TBeatValues;
  offset: number;
  interval: number;
  repeat: number;
  delay: number;
};

export type TSynthConfig =
  TSynthOptions & TMultiOptions;

export type TPlayingKey =
  | TMusicKey
  | TBeatsPresetsKey
  | number;
export type TMusicState = {
  bpm: number;
  synth: TSynthConfig;
  steps: TMidiValues;
  scale: TScaleOptions;
  sequence: TSequenceOptions;
  beatsPresetKey: TBeatsPresetsKey;
  playingKeys: TPlayingKey[];
  recording: TRecording | null;
};
export type TMusicOptions = Pick<
  TMusicState,
  "bpm"
>;
export type TMusicOptionsKey =
  keyof TMusicOptions;
