import {
  TSynthOptions,
  TMultiOptions,
} from "react-synthwave";
import {
  DEFAULT_MULTI_SYNTH_OPTIONS,
  DEFAULT_SYNTH_OPTIONS,
  SYNTH_TYPES_RECORD,
} from "~/pages/video/music/synth/constants";
import { BEATS_PRESETS } from "~/hooks/music/beats/presets";
import { TBeatsPresetsKey } from "~/hooks/music/beats/presets/types";
import { TMidiValues } from "~/hooks/music/midis/types";
import { TScaleOptions } from "~/pages/video/music/synth/composition/scale/types";
import { TSequenceOptions } from "~/pages/video/music/synth/composition/sequence/types";
import { TBeatsRecord } from "~/hooks/music/beats/types";

export type TSynthType =
  keyof typeof SYNTH_TYPES_RECORD;

export type TSynthMultiOptionType =
  keyof typeof DEFAULT_MULTI_SYNTH_OPTIONS;

export type TSynthOptionType =
  keyof typeof DEFAULT_SYNTH_OPTIONS;

export type TSynthConfig = Omit<
  TSynthOptions & TMultiOptions,
  "output" | "onEnded" | "type"
>;

export type TBeatsPresets =
  typeof BEATS_PRESETS;
export type TScheduleOptions = {
  midi: number;
  bpm: number;
  steps: TMidiValues;
  scale: TScaleOptions;
  sequence: TSequenceOptions;
  synth: TSynthOptions;
  presets: TBeatsPresets;
  presetKey: TBeatsPresetsKey;
  preset(): TBeatsRecord; //TBeatsPresets[TBeatsPresetsKey];
};
export type TStepsLoookup = Record<
  string,
  TMidiValues
>;
