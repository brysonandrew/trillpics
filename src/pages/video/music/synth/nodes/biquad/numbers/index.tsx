import { FC } from "react";
import {
  BIQUAD_FILTER_PARAM_KEYS,
  BIQUAD_KEY,
} from "~/pages/video/music/synth/nodes/biquad/constants";
import { ModulatorsParams } from "~/pages/video/music/modulators/params";
import { resolveObjectKeys } from "~/utils/object";
import { TBiquadFilterParamKey } from "~/pages/video/music/synth/nodes/biquad/types";
import { TResolveAudioParamProps } from "~/pages/video/music/types";

export const NodesBiquadNumbers: FC<
  TResolveAudioParamProps<TBiquadFilterParamKey>
> = (props) => {
  const keys = resolveObjectKeys(
    BIQUAD_FILTER_PARAM_KEYS
  );
  return (
    <ModulatorsParams
      graphKey={BIQUAD_KEY}
      keys={keys}
      {...props}
    />
  );
};
