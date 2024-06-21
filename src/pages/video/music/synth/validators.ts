import {
  SCALE_RECORD,
  TScaleKey,
} from "~/constants/scales";
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
  DEFAULT_BEATS_SLIDER_OPTIONS,
  DEFAULT_MIDIS_SLIDER_OPTIONS,
  DEFAULT_MULTI_SYNTH_OPTIONS,
  DEFAULT_MUSIC_SLIDER_OPTIONS,
  DEFAULT_SCALE_SLIDER_OPTIONS,
  DEFAULT_SEQUENCE_OPTIONS,
  DEFAULT_SYNTH_OPTIONS,
  DEFAULT_SYNTH_SLIDER_OPTIONS,
  TSynthConfigKey,
} from "~/store/state/music/constants";
import {
  TBeatsOptions,
  TMidisOptions,
  TMusicOptionsKey,
  TScaleOptions,
  TScaleSliderOptions,
  TScaleSliderOptionsKey,
  TSequenceOptionsKey,
  TSequenceSliderOptionsKey,
  TSynthConfig,
} from "~/store/state/music/types";

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
export const isScaleKey = (
  key: string
): key is TScaleKey => {
  if (key in SCALE_RECORD) return true;
  return false;
};
export const isSynthConfigType = (
  key: string
): key is keyof TSynthConfig => {
  if (
    key in
      DEFAULT_SYNTH_SLIDER_OPTIONS ||
    key in DEFAULT_MULTI_SYNTH_OPTIONS
  )
    return true;
  return false;
};
export const isSynthSliderConfigType = (
  key: string
): key is TSynthConfigKey => {
  if (
    key in
      DEFAULT_SYNTH_SLIDER_OPTIONS ||
    key in DEFAULT_MULTI_SYNTH_OPTIONS
  )
    return true;
  return false;
};
export const isSequenceSliderConfigType =
  (
    key: string
  ): key is TSequenceSliderOptionsKey => {
    if (key in DEFAULT_SEQUENCE_OPTIONS)
      return true;
    return false;
  };
export const isScaleSliderConfigType = (
  key: string
): key is TScaleSliderOptionsKey => {
  if (
    key in DEFAULT_SCALE_SLIDER_OPTIONS
  )
    return true;
  return false;
};
export const isMidisSliderConfigType = (
  key: string
): key is keyof TMidisOptions => {
  if (
    key in DEFAULT_MIDIS_SLIDER_OPTIONS
  )
    return true;
  return false;
};
export const isBeatsSliderConfigType = (
  key: string
): key is keyof TBeatsOptions => {
  if (
    key in DEFAULT_BEATS_SLIDER_OPTIONS
  )
    return true;
  return false;
};
export const isMusicSliderConfigType = (
  key: string
): key is TMusicOptionsKey => {
  if (
    key in DEFAULT_MUSIC_SLIDER_OPTIONS
  )
    return true;
  return false;
};
