import { FC } from "react";
import { useNodesSourceDelayCreate } from "~/pages/video/music/synth/nodes/nodes/delay/hook";
import { TSourceNodesProps } from "~/pages/video/music/synth/nodes/types";
import { SynthNode } from "~/pages/video/music/synth/nodes/node";
import { NodesDelay } from "~/pages/video/music/synth/nodes/delay";

type TProps = TSourceNodesProps;
export const NodesSourceDelay: FC<
  TProps
> = (props) => {
  const processor =
    useNodesSourceDelayCreate(props);
  return (
    <SynthNode node={props.node}>
      <NodesDelay
        resolveAudioParam={(key) =>
          processor[key]
        }
      />
    </SynthNode>
  );
};
