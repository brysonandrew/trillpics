import { FC } from "react";
import { useNodesSourceBiquadCreate } from "~/pages/video/music/synth/nodes/nodes/biquad/hooks";
import { SynthNode } from "~/pages/video/music/synth/nodes/node";
import { TSourceNodesProps } from "~/pages/video/music/synth/nodes/types";
import { NodesBiquad } from "~/pages/video/music/synth/nodes/biquad";

type TProps = TSourceNodesProps;
export const NodesSourceBiquad: FC<
  TProps
> = (props) => {
  const processor =
    useNodesSourceBiquadCreate(props);
  return (
    <SynthNode
      node={props.node}
    >
      <NodesBiquad
        numbers={{
          resolveAudioParam: (key) =>
            processor[key],
        }}
        dropdowns={{
          onValueChange: (
            value: BiquadFilterType
          ) => {
            processor.type = value;
          },
        }}
      />
    </SynthNode>
  );
};
