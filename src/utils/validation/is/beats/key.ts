import { BEATS_KEYS } from "~/hooks/music/beats/constants";
import { TMidisStepsKey } from "~/hooks/music/midis/types";
import { isDefined } from "~/utils/validation/is/defined";

export const isBeatsKey = (
  stepsKey?: string
): stepsKey is TMidisStepsKey => {
  if (
    isDefined(stepsKey) &&
    stepsKey in BEATS_KEYS
  )
    return true;
  return false;
};
