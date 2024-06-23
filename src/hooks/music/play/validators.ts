import { TBeatsStepsKey } from "~/hooks/music/beats/types";
import { MIDI_RECORD } from "~/hooks/music/midis/constants";
import { TMidisStepsKey } from "~/hooks/music/midis/types";
import { isDefined } from "~/utils/validation/is/defined";

export const isMidisKey = (
  stepsKey?: string
): stepsKey is TMidisStepsKey => {
  if (
    isDefined(stepsKey) &&
    stepsKey in MIDI_RECORD
  )
    return true;
  return false;
};

export const isBeatsKey = (
  stepsKey?: string
): stepsKey is TBeatsStepsKey => {
  if (
    isDefined(stepsKey) &&
    stepsKey in MIDI_RECORD
  )
    return true;
  return false;
};