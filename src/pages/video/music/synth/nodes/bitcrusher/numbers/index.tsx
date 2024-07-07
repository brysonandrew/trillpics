import type { FC } from "react";
import { BITCRUSHER_PARAMS } from "~/pages/video/music/synth/nodes/bitcrusher/constants";
import { ModulatorsParams } from "~/pages/video/music/modulators/params";
import { TResolveAudioParamProps } from "~/pages/video/music/types";
import { TBitcrusherParamsKey } from "~/pages/video/music/synth/nodes/bitcrusher/types";

export const NodesBitcrusherNumbers: FC<
  TResolveAudioParamProps<TBitcrusherParamsKey>
> = (props) => {
  return (
    <ModulatorsParams
      graphKey="bitcrusher"
      keys={BITCRUSHER_PARAMS}
      {...props}
    />
  );
};
