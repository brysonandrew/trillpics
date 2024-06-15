import {
  TSynthOptions,
  TMultiOptions,
} from "react-synthwave";
import { TScaleKey } from "~/constants/scales";
import { TBeatsPresetsKey } from "~/hooks/music/beats/presets/types";
import {
  TBeatValues,
  TBeatsSequenceKey,
} from "~/hooks/music/beats/types";
import {
  TMidis,
  TMidisSequenceKey,
} from "~/hooks/music/midis/types";
import { MUSIC_TYPES } from "~/store/state/music/constants";

export type TMusicKey =
  (typeof MUSIC_TYPES)[number];
export type TSequenceKey<
  T extends TMusicKey
> = T extends "beats"
  ? TBeatsSequenceKey
  : TMidisSequenceKey;
export type USequenceEntry =
  | [TBeatsSequenceKey, TBeatValues]
  | [TMidisSequenceKey, TMidis];

export type TSequenceBeatRecord =
  Record<
    TBeatsSequenceKey,
    TBeatValues
  >;
export type TPartialSequenceBeatRecord =
  Partial<TSequenceBeatRecord>;
export type TSequenceMidiRecord =
  Record<TMidisSequenceKey, TMidis>;
export type TPartialSequenceMidiRecord =
  Partial<TSequenceMidiRecord>;

export type USequenceKey =
  | TBeatsSequenceKey
  | TMidisSequenceKey;

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
export type TMelodyOptions = {
  beats: TBeatValues;
  offset: number;
  interval: number;
  repeat: number;
  scale: TScaleOptions;
};

export type TMusicOptions = {
  bpm: number;
};
export type TMusicOptionsKey =
  keyof TMusicOptions;

export type TSynthConfig =
  TSynthOptions &
    TMultiOptions & {
      steps: TMidis;
      melody: TMelodyOptions;
    };
export type TMusicState =
  TMusicOptions & {
    synth: TSynthConfig;
    beatsPresetKey: TBeatsPresetsKey;
    playKey: TMusicKey | null;
    recording: TRecording | null;
  };
