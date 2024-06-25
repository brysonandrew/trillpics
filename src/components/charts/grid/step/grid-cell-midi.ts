import { isString } from "unocss";
import { TMidiValue } from "~/hooks/music/midis/types";
import { resolveStepRef } from "~/hooks/grid";
import { isDefined } from "~/utils/validation/is/defined";

export const resolveGridCellMidi = (
  stepRef: ReturnType<
    typeof resolveStepRef
  >,
  prevValue:TMidiValue
) => {
  if (
    !stepRef.isAlreadyDefined ||
    !isDefined(stepRef.grid)
  )
    return null;
  const datasetValue =
    stepRef.grid.dataset.midi;

  const nextValue =
    isString(datasetValue)
      ? datasetValue
          .split(",")
          .map((v) =>
            v === "null"
              ? null
              : Number(v)
          )
      : prevValue;

  return nextValue;
};
