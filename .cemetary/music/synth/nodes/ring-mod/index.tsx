import type { FC } from "react";
import { ModulatorsParams } from "~/pages/video/music/modulators/params";
import { RING_MOD_PARAMS } from "~/pages/video/music/synth/nodes/ring-mod/constants";
import { TResolveAudioParamProps } from "~/pages/video/music/types";
import { RING_MOD_KEY } from "~/pages/video/music/_context/refs/audio/ring-mod";
import { TRingModParamsKey } from "~/pages/video/music/_context/refs/audio/ring-mod/types";

export const NodesRingMod: FC<
  TResolveAudioParamProps<TRingModParamsKey>
> = (props) => {
  return (
    <ModulatorsParams
      graphKey={RING_MOD_KEY}
      keys={RING_MOD_PARAMS}
      {...props}
    />
  );
};
