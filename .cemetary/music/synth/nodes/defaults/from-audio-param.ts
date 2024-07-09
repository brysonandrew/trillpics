import { TInputsNumberBaseProps } from "~/components/inputs/number/types";

export const defaultsFromAudioParam = (
  audioParam: AudioParam
):TInputsNumberBaseProps => {
  const { maxValue, minValue, value } =
    audioParam;
  const range = maxValue - minValue;
  const step = range / 100;
  return {
    defaultValue: value,
    min: minValue,
    max: maxValue,
    step,
  } as const;
};
