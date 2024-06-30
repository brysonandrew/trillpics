import type { FC } from "react";
import { NodesTemplate } from "~/pages/video/music/synth/nodes/template";
import { NodesBitcrusherNumbers } from "~/pages/video/music/synth/nodes/worklets/bitcrusher/numbers";

export const NodesBitcrusher: FC =
  () => {
    return (
      <NodesTemplate
        title="bitcrusher"
        Input={NodesBitcrusherNumbers}
      >
        <NodesBitcrusherNumbers />
      </NodesTemplate>
    );
  };
