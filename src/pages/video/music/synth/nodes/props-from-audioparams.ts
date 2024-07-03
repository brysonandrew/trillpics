import { INPUTS_NUMBER_OVERRIDES } from "~/pages/video/music/synth/nodes/constants";
import { KARPLUS_STRONG_KEY } from "~/pages/video/music/synth/nodes/worklets/karplus-strong/numbers";
const resolveRange = (
  type?: string,
  key?: string
) => {
  if (type === KARPLUS_STRONG_KEY) {
    if (key === "delayTime")
      return {
        max: 1000,
        min: 1,
        step: 1,
        defaultValue: 10,
      };

    if (key === "gain") {
      return {
        defaultValue: 0.9,
        step:0.01,
        min: -1,
        max: 1,
      };
    }
    if (key === "frequency") {
      return {
        defaultValue: 100,
        min: 0,
        step:1,
        max: 440,
      };
    }
  }
  console.log(key,type);
  return {
    max: 1,
    min: 0,
    step: 0.001,
    defaultValue: 0.5,
  };
};
export const propsFromAudioparams = (
  audioParam: AudioParam | null,
  key?: string,
  type?: string
) => {
  const overrides =
    INPUTS_NUMBER_OVERRIDES;
  if (!audioParam)
    return resolveRange(type, key);
  const { maxValue, minValue, value } =
    audioParam;
  const range = maxValue - minValue;
  const step = range / 100;

  return {
    defaultValue: value,
    min: minValue,
    max: maxValue,
    step,
    ...(key ? overrides[key] : {}),
  } as const;
};
