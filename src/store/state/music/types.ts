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

export type TScaleSliderOptions = {
  delta: number;
};

export type TScaleSliderOptionsKey =
  keyof TScaleSliderOptions;

export type TScaleOptions =
  TScaleSliderOptions & {
    pattern: TScalePattern;
    key: TScaleKey;
  };

export type TSequenceSliderOptions = {
  offset: number;
  interval: number;
  repeat: number;
  delay: number;
  duration: number;
  beats: number;
};
export type TSequenceSliderOptionsKey =
  keyof TSequenceSliderOptions;
export type TSequenceOptions =
  TSequenceSliderOptions;
export type TSequenceOptionsKey =
  keyof TSequenceOptions;
export type TSequenceOptionsIncrementerKey =
  keyof Omit<TSequenceOptions, "beats">;

export type TSynthConfig = Omit<
  TSynthOptions & TMultiOptions,
  "output" | "onEnded" | "type"
>;

export type TBeatsOptions = {
  gain: number;
};
export type TBeatsOptionsKey =
  keyof TBeatsOptions;

  export type TMidisSliderOptions = {
    gain: number;
    frequency: number
    detune: number
    delayTime:number
  };
  export type TMidisSliderOptionsKey =
  keyof TMidisSliderOptions;
export type TMidisOptions = TMidisSliderOptions & {
  type:OscillatorType
};
export type TMidisOptionsKey =
  keyof TMidisOptions;
export type TPlayingKey =
  | TMusicKey
  | TBeatsPresetsKey
  | number;

export type TMusicState = {
  isLoop: boolean;
  bpm: number;
  master: number;
  midis: TMidisOptions;
  beats: TBeatsOptions;
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
  "bpm" | "master"
>;
export type TMusicOptionsKey =
  keyof TMusicOptions;
