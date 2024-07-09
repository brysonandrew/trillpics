import { TAllParamsKey } from "~/pages/video/music/types";

export const defaultsPredefinedBitcrusher = (
  paramKey: TAllParamsKey
) => {
  if (paramKey === "frequency") {
    return {
      max: 0.1,
      min: 0,
      step: 0.0001,
      defaultValue: 0.4,
    };
  }
  if (paramKey === "bits") {
    return {
      max: 2,
      min: 1,
      step: 0.0001,
      defaultValue: 1.4,
    };
  }
};
