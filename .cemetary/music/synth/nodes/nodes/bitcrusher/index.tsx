import { FC } from "react";
import { useNodesSourcesBitcrusher } from "~/pages/video/music/synth/nodes/nodes/bitcrusher/hook";
import { SynthNode } from "~/pages/video/music/synth/nodes/node";
import { TSourceNodesProps } from "~/pages/video/music/synth/nodes/types";
import { NodesBitcrusher } from "~/pages/video/music/synth/nodes/bitcrusher";

type TProps = TSourceNodesProps;
export const NodesSourceBitcrusher: FC<
  TProps
> = (props) => {
  const processor =
    useNodesSourcesBitcrusher(props);
  return (
    <SynthNode node={props.node}>
      <NodesBitcrusher
        resolveAudioParam={
          (key) => processor.node.parameters.get(key)
        }
      />
    </SynthNode>
  );
};
