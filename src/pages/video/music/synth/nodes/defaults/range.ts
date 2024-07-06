import { KARPLUS_KEY } from "~/pages/video/music/synth/nodes/karplus/constants";
import { OSCILLATOR_KEY } from "~/pages/video/music/synth/nodes/oscillator/constants";
import { isAudioParam } from "~/utils/music/validation";

export const defaultsRange = (
  audioParam?: AudioParam | null,
  type?: string,
  key?: string
) => {
  if (key === "detune")
    return {
      max: 6000,
      min: 0,
      step: 1,
      defaultValue: 0,
    };
  if (type === OSCILLATOR_KEY) {
  }
  if (type === KARPLUS_KEY) {
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
        step: 0.01,
        min: -1,
        max: 1,
      };
    }
    if (key === "frequency") {
      return {
        defaultValue: 100,
        min: 0,
        step: 1,
        max: 440,
      };
    }
  }
  if (isAudioParam(audioParam)) {
    const {
      maxValue,
      minValue,
      value,
    } = audioParam;
    const range = maxValue - minValue;
    const step = range / 100;
    return {
      defaultValue: value,
      min: minValue,
      max: maxValue,
      step,
    } as const;
  }
  console.log(key, type);
  return {
    max: 1,
    min: 0,
    step: 0.001,
    defaultValue: 0.5,
  };
};
