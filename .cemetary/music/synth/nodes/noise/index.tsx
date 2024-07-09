import type { FC } from "react";
import { NodesNoiseNumbers } from "~/pages/video/music/synth/nodes/noise/numbers";
import { TNoiseParamKey } from "~/pages/video/music/synth/nodes/noise/types";
import { TResolveAudioParamProps } from "~/pages/video/music/types";

export const NodesNoise: FC<
  TResolveAudioParamProps<TNoiseParamKey>
> = (props) => {
  return (
    <NodesNoiseNumbers {...props} />
  );
};
