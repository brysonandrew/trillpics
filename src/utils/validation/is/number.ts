import { isDefined } from "~/utils/validation/is/defined";

export const isNumber = (value?: unknown | number): value is number => {
  if (isDefined(value) && typeof value === 'number') return true;
  return false;
};
