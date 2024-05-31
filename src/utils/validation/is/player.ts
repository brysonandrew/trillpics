import { TPlayerInstance, TPlayerInstanceReady } from "~/pages/video/player/_context/ready/types";
import { isDefined } from "~/utils/validation/is/defined";
import { isNull } from "~/utils/validation/is/null";

export const isPlayerInstance = (
  value?: unknown | TPlayerInstance
): value is TPlayerInstanceReady => {
  if (
    (isDefined(value),
    typeof value === 'object' &&
      !isNull(value) &&
      'seekTo' in value &&
      'addEventListener' in value &&
      'removeEventListener' in value &&
      'getCurrentFrame' in value &&
      'getScale' in value)
  )
    return true;
  return false;
};
