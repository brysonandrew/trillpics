import {
  TSynthOptions,
  TMultiOptions,
} from "react-synthwave";
import { TBeatsPresetsKey } from "~/hooks/music/beats/presets/types";
import {
  TBeats,
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
  | [TBeatsSequenceKey, TBeats]
  | [TMidisSequenceKey, TMidis];

export type TSequenceBeatRecord =
  Record<TBeatsSequenceKey, TBeats>;
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

export type TMusicState = {
  synthSteps: TMidis
  beatsPresetKey: TBeatsPresetsKey
  playKey: TMusicKey | null;
  recording: TRecording | null;
  bpm: number;
  options: TSynthOptions;
  multi: TMultiOptions;
};
