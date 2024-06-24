import { INPUTS_NUMBER_OVERRIDES } from "~/pages/video/music/synth/nodes/constants";

export const propsFromAudioparams = (
  key: string,
  audioParam: AudioParam
) => {
  const overrides = INPUTS_NUMBER_OVERRIDES;
  const { maxValue, minValue, value } =
    audioParam;
  const range = maxValue - minValue;
  const step = range / 100;

  return {
    defaultValue: value,
    min: minValue,
    max: maxValue,
    step,
    ...overrides[key],
  } as const;
};
