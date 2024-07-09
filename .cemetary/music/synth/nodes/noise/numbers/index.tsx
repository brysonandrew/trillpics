import type { FC } from "react";
import { TResolveAudioParamProps } from "~/pages/video/music/types";
import { ModulatorsParams } from "~/pages/video/music/modulators/params";
import { NOISE_PARAMS } from "~/pages/video/music/synth/nodes/noise/constants";
import { TNoiseParamKey } from "~/pages/video/music/synth/nodes/noise/types";
import { WHITE_NOISE_KEY } from "~/pages/video/music/_context/refs/audio/noises";

export const NodesNoiseNumbers: FC<
  TResolveAudioParamProps<TNoiseParamKey>
> = (props) => {
  return (
    <ModulatorsParams
      graphKey={WHITE_NOISE_KEY}
      keys={NOISE_PARAMS}
      {...props}
    />
  );
};
