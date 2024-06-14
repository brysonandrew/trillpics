import { SCALE_RECORD, TScaleKey } from "~/constants/scales";
import {
  MUSIC_OPTIONS_RECORD,
  SYNTH_TYPES_RECORD,
} from "~/pages/video/music/synth/constants";
import {
  TSynthMultiOptionType,
  TSynthOptionType,
  TSynthType,
} from "~/pages/video/music/synth/types";
import {
  DEFAULT_MULTI_SYNTH_OPTIONS,
  DEFAULT_SYNTH_OPTIONS,
} from "~/store/state/music/constants";
import { TMusicOptionsKey } from "~/store/state/music/types";

export const isSynthType = (
  key: string
): key is TSynthType => {
  if (key in SYNTH_TYPES_RECORD)
    return true;
  return false;
};
export const isMusicOptionType = (
  key: string
): key is TMusicOptionsKey => {
  if (key in MUSIC_OPTIONS_RECORD)
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
export const isScaleKey= (
  key: string
): key is TScaleKey => {
  if (
    key in SCALE_RECORD
  )
    return true;
  return false;
};