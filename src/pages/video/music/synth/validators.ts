import { SYNTH_TYPES_RECORD } from "~/pages/video/music/synth/constants";
import {
  TSynthMultiOptionType,
  TSynthOptionType,
  TSynthType,
} from "~/pages/video/music/synth/types";
import {
  DEFAULT_MULTI_SYNTH_OPTIONS,
  DEFAULT_SYNTH_OPTIONS,
} from "~/store/state/music/constants";

export const isSynthType = (
  key: string
): key is TSynthType => {
  if (key in SYNTH_TYPES_RECORD)
    return true;
  return false;
};

export const isSynthOptionsType = (
  key: string
): key is TSynthOptionType => {
  if (key in DEFAULT_SYNTH_OPTIONS)
    return true;
  return false;
};
export const isSynthMultiOptionsType = (
  key: string
): key is TSynthMultiOptionType => {
  if (
    key in DEFAULT_MULTI_SYNTH_OPTIONS
  )
    return true;
  return false;
};
