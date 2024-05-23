import { isDefined } from "~/utils/validation/is/defined";

export const isNumber = (
  value?: unknown | number
): value is number => {
  if (
    isDefined(value) &&
    typeof value === "number"
  )
    return true;
  return false;
};

export function isVNumber(
  value?: unknown | number
): asserts value is number {
  if (!isNumber(value)) {
    console.log(value);
    throw Error("Not a number v ");
  }
}
