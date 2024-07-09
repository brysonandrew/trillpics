import { FC } from "react";
import { useNodesSourcesRingMod } from "~/pages/video/music/synth/nodes/nodes/ring-mod/create";
import { SynthNode } from "~/pages/video/music/synth/nodes/node";
import { TSourceNodesProps } from "~/pages/video/music/synth/nodes/types";
import { NodesRingMod } from "~/pages/video/music/synth/nodes/ring-mod";

type TProps = TSourceNodesProps;
export const NodesSourceRingMod: FC<
  TProps
> = (props) => {
  const processor =
    useNodesSourcesRingMod(props);
  return (
    <SynthNode node={props.node}>
      <NodesRingMod
        resolveAudioParam={
          (key) => processor.node.parameters.get(key)
        }
      />
    </SynthNode>
  );
};
