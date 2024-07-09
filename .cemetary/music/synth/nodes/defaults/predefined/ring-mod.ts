import { TAllParamsKey } from "~/pages/video/music/types";
import { TRingModParamsKey } from "~/pages/video/music/_context/refs/audio/ring-mod/types";

export const defaultsPredefinedRingMod =
  (paramKey: TAllParamsKey) => {
    const ringModKey =
      paramKey as TRingModParamsKey;
    if (ringModKey === "gain") {
      return {
        max: 1,
        min: 0,
        step: 0.001,
        defaultValue: 0.5,
      };
    }
    if (ringModKey === "rate") {
      return {
        max: 1,
        min: 0,
        step: 0.001,
        defaultValue: 0.5,
      };
    }
    if (ringModKey === "blend") {
      return {
        max: 1,
        min: 0,
        step: 0.001,
        defaultValue: 0.5,
      };
    }
    if (ringModKey === "waveform") {
      return {
        max: 10,
        min: 0,
        step: 1,
        defaultValue: 4,
      };
    }
  };
