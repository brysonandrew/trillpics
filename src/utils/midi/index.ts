import { TMidiValue } from "~/hooks/music/midis/types";
import { TStepValues } from "~/hooks/music/types";

export const resolveMidiNumber = (
  midiValue: TMidiValue
): number => {
  if (midiValue === null) return 0;
  if (Array.isArray(midiValue))
    return midiValue.reduce(
      (a: number, c) =>
        a + (c === null ? 0 : c),
      0
    );
  return midiValue;
};
export const resolveMidiNormalDelta = (
  steps: TStepValues,
  stepIndex: number
) => {
  const prevIndex =
    stepIndex === 0
      ? steps.length - 1
      : stepIndex - 1;
  const prev = resolveMidiNumber(
    steps[prevIndex]
  );
  const curr = resolveMidiNumber(
    steps[stepIndex]
  );

  const deltaMidi = curr - prev;

  return deltaMidi;
};
