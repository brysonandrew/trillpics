import { TAllParamsKey } from "~/pages/video/music/types";

const DELAY_TIME_OVERRIDES = {
  max: 1000,
  min: 1,
  step: 1,
  defaultValue: 10,
} as const;

export const predefinedKarplus = (paramKey: TAllParamsKey) => {
  if (paramKey === "delayTime")
    return DELAY_TIME_OVERRIDES;

  if (paramKey === "gain") {
    return {
      defaultValue: 0.9,
      step: 0.01,
      min: -1,
      max: 1,
    };
  }
  if (paramKey === "frequency") {
    return {
      defaultValue: 100,
      min: 0,
      step: 1,
      max: 440,
    };
  }
};
