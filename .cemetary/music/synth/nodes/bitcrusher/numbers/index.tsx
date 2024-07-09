import type { FC } from "react";
import { BITCRUSHER_PARAMS } from "~/pages/video/music/synth/nodes/bitcrusher/constants";
import { ModulatorsParams } from "~/pages/video/music/modulators/params";
import { TResolveAudioParamProps } from "~/pages/video/music/types";
import { TBitcrusherParamsKey } from "~/pages/video/music/synth/nodes/bitcrusher/types";
import { BITCRUSHER_KEY } from "~/pages/video/music/_context/refs/audio/bitcrusher";

export const NodesBitcrusherNumbers: FC<
  TResolveAudioParamProps<TBitcrusherParamsKey>
> = (props) => {
  return (
    <ModulatorsParams
      graphKey={BITCRUSHER_KEY}
      keys={BITCRUSHER_PARAMS}
      {...props}
    />
  );
};
