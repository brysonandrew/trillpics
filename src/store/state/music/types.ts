import { TBeatsPresetsKey } from "~/hooks/music/beats/presets/types";
import {
  TBeatValues,
  TBeatsStepsKey,
} from "~/hooks/music/beats/types";
import {
  TMidiValues,
  TMidisStepsKey,
} from "~/hooks/music/midis/types";
import { TScaleOptions } from "~/pages/video/music/synth/scale/types";
import { TSequenceOptions } from "~/pages/video/music/synth/sequence/types";
import { TSynthConfig } from "~/pages/video/music/synth/types";
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

export type TBeatsOptions = {
  gain: number;
  presetKey: TBeatsPresetsKey;
};
export type TBeatsOptionsKey =
  keyof TBeatsOptions;

export type TPlayingKey =
  | TMusicKey
  | TBeatsPresetsKey
  | number;

export type TMusicState = {
  isLoop: boolean;
  bpm: number;
  beats: TBeatsOptions;
  synth: TSynthConfig;
  playingKeys: TPlayingKey[];
  steps: TMidiValues;
  scale: TScaleOptions;
  sequence: TSequenceOptions;
  recording: TRecording | null;
};
