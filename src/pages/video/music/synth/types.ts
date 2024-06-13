import { SYNTH_TYPES_RECORD } from "~/pages/video/music/synth/constants";
import { DEFAULT_MULTI_SYNTH_OPTIONS, DEFAULT_SYNTH_OPTIONS } from "~/store/state/music/constants";

export type TSynthType =
  keyof typeof SYNTH_TYPES_RECORD;

  export type TSynthMultiOptionType =
  keyof typeof DEFAULT_MULTI_SYNTH_OPTIONS;


  export type TSynthOptionType =
  keyof typeof DEFAULT_SYNTH_OPTIONS;