import type { FC } from "react";
import { TResolveAudioParamProps } from "~/pages/video/music/types";
import { ModulatorsParams } from "~/pages/video/music/modulators/params";
import { NOISE_PARAMS } from "~/pages/video/music/synth/nodes/noise/constants";
import { TNoiseParamKey } from "~/pages/video/music/synth/nodes/noise/types";

const KEY = "white-noise" as const;
export const NodesNoiseNumbers: FC<
  TResolveAudioParamProps<TNoiseParamKey>
> = (props) => {
  return (
    <ModulatorsParams
      graphKey={KEY}
      keys={NOISE_PARAMS}
      {...props}
    />
  );
};
