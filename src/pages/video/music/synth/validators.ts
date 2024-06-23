import { MIDI_RECORD } from "~/hooks/music/midis/constants";
import { TMidisStepsKey } from "~/hooks/music/midis/types";
import {
  DEFAULT_MULTI_SYNTH_OPTIONS,
  DEFAULT_SYNTH_OPTIONS,
  DEFAULT_SYNTH_SLIDER_OPTIONS,
  SYNTH_TYPES_RECORD,
  TSynthConfigKey,
} from "~/pages/video/music/synth/constants";
import { TScaleSliderOptionsKey } from "~/pages/video/music/synth/scale/types";
import { DEFAULT_SEQUENCE_OPTIONS } from "~/pages/video/music/synth/sequence/constants";
import { TSequenceSliderOptionsKey } from "~/pages/video/music/synth/sequence/types";
import {
  TSynthConfig,
  TSynthMultiOptionType,
  TSynthOptionType,
  TSynthType,
} from "~/pages/video/music/synth/types";
import { DEFAULT_BEATS_SLIDER_OPTIONS, DEFAULT_SCALE_SLIDER_OPTIONS } from "~/store/state/music/constants";
import { TBeatsOptions } from "~/store/state/music/types";
import { isDefined } from "~/utils/validation/is/defined";

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
export const isBeatsSliderConfigType = (
  key: string
): key is keyof TBeatsOptions => {
  if (
    key in DEFAULT_BEATS_SLIDER_OPTIONS
  )
    return true;
  return false;
};

