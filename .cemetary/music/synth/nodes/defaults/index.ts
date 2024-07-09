import { TInputsNumberBaseProps } from "~/components/inputs/number/types";
import { defaultsFromAudioParam } from "~/pages/video/music/synth/nodes/defaults/from-audio-param";
import { defaultsPredefined } from "~/pages/video/music/synth/nodes/defaults/predefined";
import { TDefaultsPredefinedKeys } from "~/pages/video/music/synth/nodes/defaults/predefined/types";

export const defaultsFromAudioparams = (
  audioParam: AudioParam | null,
  predefinedKeys: TDefaultsPredefinedKeys
): TInputsNumberBaseProps => {
  let result = defaultsPredefined(
    predefinedKeys
  )
  if (!result && audioParam !== null) {
    result =
      defaultsFromAudioParam(
        audioParam
      );
  }

  return result ?? {
    max: 1,
    min: 0,
    step: 0.001,
    defaultValue: 0.5,
  };
};
