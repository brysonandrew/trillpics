import type { FC } from "react";
import { NodesTemplate } from "~/pages/video/music/synth/nodes/template";
import { NodesBitcrusherNumbers } from "~/pages/video/music/synth/nodes/bitcrusher/numbers";
import { TUpdateNodeHandlerProps } from "~/components/inputs/slider/types";
import { TBitcrusherNumberOptionsKey } from "~/pages/video/music/synth/nodes/bitcrusher/types";

export const NodesBitcrusher: FC<
  TUpdateNodeHandlerProps<TBitcrusherNumberOptionsKey>
> = (props) => {
  return (
    <NodesTemplate title="bitcrusher">
      <NodesBitcrusherNumbers
        {...props}
      />
    </NodesTemplate>
  );
};
