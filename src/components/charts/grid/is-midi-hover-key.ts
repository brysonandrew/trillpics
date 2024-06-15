import { TMidiHoverKey } from "~/store/state/hover/types";
import { isDefined } from "~/utils/validation/is/defined";
import { isString } from "~/utils/validation/is/string";
export const MIDI_HOVER_KEY_DELIMITER =
  "-";
export const isMidiHoverKey = (
  value?: string|number
): value is TMidiHoverKey => {
  if (
    isDefined(value) &&
    isString(value) &&
    value.startsWith(
      `midi${MIDI_HOVER_KEY_DELIMITER}`
    )
  )
    return true;
  return false;
};
