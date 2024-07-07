import { TInputsNumberBaseProps } from "~/components/inputs/number/types";
import { BIQUAD_KEY } from "~/pages/video/music/synth/nodes/biquad/constants";
import { defaultsPredefinedBiquad } from "~/pages/video/music/synth/nodes/defaults/predefined/biquad";
import { defaultsPredefinedBitcrusher } from "~/pages/video/music/synth/nodes/defaults/predefined/bitcrusher";
import { PREDEFINED_PARAMS_DETUNE } from "~/pages/video/music/synth/nodes/defaults/predefined/params/detune";
import { PREDEFINED_PARAMS_FREQUENCY } from "~/pages/video/music/synth/nodes/defaults/predefined/params/frequency";
import { defaultsPredefinedRingMod } from "~/pages/video/music/synth/nodes/defaults/predefined/ring-mod";
import { TDefaultsPredefinedKeys } from "~/pages/video/music/synth/nodes/defaults/predefined/types";
import { BITCRUSHER_KEY } from "~/pages/video/music/_context/refs/audio/bitcrusher";
import { RING_MOD_KEY } from "~/pages/video/music/_context/refs/audio/ring-mod";

export const defaultsPredefined = (
  config: TDefaultsPredefinedKeys
): TInputsNumberBaseProps | null => {
  const { graphKey, paramKey } = config;
  if (graphKey === BIQUAD_KEY)
    defaultsPredefinedBiquad(config);
  if (graphKey === RING_MOD_KEY)
    defaultsPredefinedRingMod(paramKey);
  if (graphKey === BITCRUSHER_KEY)
    defaultsPredefinedBitcrusher(paramKey);

  if (paramKey === "detune")
    return PREDEFINED_PARAMS_DETUNE;
  if (paramKey === "frequency")
    return PREDEFINED_PARAMS_FREQUENCY;

  return null;
};
