import type { FC } from "react";
import { NodesBitcrusherNumbers } from "~/pages/video/music/synth/nodes/bitcrusher/numbers";
import { TBitcrusherParamsKey } from "~/pages/video/music/synth/nodes/bitcrusher/types";
import { TResolveAudioParamProps } from "~/pages/video/music/types";

export const NodesBitcrusher: FC<
  TResolveAudioParamProps<TBitcrusherParamsKey>
> = (props) => {
  return (
    <NodesBitcrusherNumbers
      {...props}
    />
  );
};
