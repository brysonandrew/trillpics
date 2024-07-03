import {
  DEFAULT_MULTI_SYNTH_OPTIONS,
  DEFAULT_SYNTH_OPTIONS,
  DEFAULT_SYNTH_SLIDER_OPTIONS,
  SYNTH_TYPES_RECORD,
  TSynthConfigKey,
} from "~/pages/video/music/synth/constants";
import { TScaleNumberOptionsKey } from "~/pages/video/music/synth/composition/scale/types";
import { DEFAULT_SEQUENCE_OPTIONS } from "~/pages/video/music/synth/composition/sequence/constants";
import { TSequenceNumberOptionsKey } from "~/pages/video/music/synth/composition/sequence/types";
import {
  TSynthType,
  TSynthOptionType,
  TSynthMultiOptionType,
} from "~/pages/video/music/_context/init/refs/schedule/types";
import { TBeatsOptions } from "~/store/state/music/types";

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

// export const isSynthConfigType = (
//   key: string
// ): key is keyof TSynthConfig => {
//   if (
//     key in
//       DEFAULT_SYNTH_SLIDER_OPTIONS ||
//     key in DEFAULT_MULTI_SYNTH_OPTIONS
//   )
//     return true;
//   return false;
// };
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
  ): key is TSequenceNumberOptionsKey => {
    if (key in DEFAULT_SEQUENCE_OPTIONS)
      return true;
    return false;
  };
