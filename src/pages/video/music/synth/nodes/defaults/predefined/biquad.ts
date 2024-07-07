import { TInputsNumberBaseProps } from "~/components/inputs/number/types";
import { BIQUAD_KEY } from "~/pages/video/music/synth/nodes/biquad/constants";
import { TBiquadFilterOptionsKey } from "~/pages/video/music/synth/nodes/biquad/types";
import { PREDEFINED_PARAMS_DETUNE } from "~/pages/video/music/synth/nodes/defaults/predefined/params/detune";
import { TDefaultsPredefinedKeys } from "~/pages/video/music/synth/nodes/defaults/predefined/types";
import { KARPLUS_KEY } from "~/pages/video/music/synth/nodes/karplus/constants";
import { BITCRUSHER_KEY } from "~/pages/video/music/_context/refs/audio/bitcrusher";
import { isDefined } from "~/utils/validation/is/defined";

const FREQUENCY_OVERRIDES = {
  min: 1,
  max: 1200,
  step: 1,
  title: "Hz",
} as const;

const Q_OVERRIDES = {
  min: 0,
  max: 10,
  step: 0.01,
  defaultValue: 0.5,
} as const;

export const defaultsPredefinedBiquad =
  ({
    graphKey,
    paramKey,
  }: TDefaultsPredefinedKeys): TInputsNumberBaseProps | null => {
    if (
      graphKey === BIQUAD_KEY &&
      isDefined(paramKey)
    ) {
      const biquadParamKey =
        paramKey as TBiquadFilterOptionsKey;
      if (biquadParamKey === "Q") {
        return Q_OVERRIDES;
      }
      if (biquadParamKey === "detune") {
        return PREDEFINED_PARAMS_DETUNE;
      }
      if (biquadParamKey === "frequency") {
        return {
          max: 1,
          min: 0,
          step: 0.001,
          defaultValue: 0.5,
        };
      }
    }
    if (graphKey === BITCRUSHER_KEY) {
   
    }
    if (paramKey === "detune")
      return {
        max: 6000,
        min: 0,
        step: 1,
        defaultValue: 0,
      };
    if (graphKey === BIQUAD_KEY) {
    }
    if (graphKey === KARPLUS_KEY) {
      if (paramKey === "delayTime")
        return {
          max: 1000,
          min: 1,
          step: 1,
          defaultValue: 10,
        };

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
    }
    if (paramKey === "frequency") {
      return {
        defaultValue: 100,
        min: 1,
        max: 1200,
        step: 1,
      };
    }

    return null;
  };
