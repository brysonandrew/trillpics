import { TSynthOptions, TMultiOptions } from "react-synthwave";
import { TMidiValues } from "~/hooks/music/midis/types";
import { DEFAULT_MULTI_SYNTH_OPTIONS, DEFAULT_SYNTH_OPTIONS, SYNTH_TYPES_RECORD } from "~/pages/video/music/synth/constants";
import { TScaleOptions } from "~/pages/video/music/synth/scale/types";
import { TSequenceOptions } from "~/pages/video/music/synth/sequence/types";

export type TSynthType =
  keyof typeof SYNTH_TYPES_RECORD;

export type TSynthMultiOptionType =
  keyof typeof DEFAULT_MULTI_SYNTH_OPTIONS;

export type TSynthOptionType =
  keyof typeof DEFAULT_SYNTH_OPTIONS;

export type TSynthConfig = Omit<
  TSynthOptions & TMultiOptions,
  "output" | "onEnded" | "type"
> 