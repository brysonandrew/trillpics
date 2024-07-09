import { NONAME_PREFIX } from "~/constants/keys";
import { TNoname } from "~/types/keys";
import { isDefined } from "~/utils/validation/is/defined";

export const isNoname = (
  name?: string
): name is TNoname => {
  if (
    isDefined(name) &&
    name.startsWith(NONAME_PREFIX)
  )
    return true;
  return false;
};
export const isNonameInverted = (
  name?: string
) => !isNoname(name);
