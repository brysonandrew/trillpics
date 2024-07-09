import type { FC } from "react";
import { NodesKarplus } from "~/pages/video/music/synth/nodes/karplus";
import { SynthNode } from "~/pages/video/music/synth/nodes/node";
import { SynthNodeTitleButton } from "~/pages/video/music/synth/nodes/node/title/button";
import { useNodesSourceKarplus } from "~/pages/video/music/synth/nodes/source/karplus/hook";
import { useNodesSourceKarplusToggle } from "~/pages/video/music/synth/nodes/source/karplus/toggle";
import { TSourceProps } from "~/pages/video/music/synth/nodes/types";

type TProps = TSourceProps;
export const NodesSourceKarplus: FC<
  TProps
> = (props) => {
  const { source } = props;
  const processor =
    useNodesSourceKarplus();
  const handleClick =
    useNodesSourceKarplusToggle();
  return (
    <SynthNode
      node={source}
      SynthNodeTitleFc={() => (
        <SynthNodeTitleButton
          onClick={() =>
            handleClick(
              props.source,
              processor
            )
          }
          node={props.source}
        />
      )}
    >
      <NodesKarplus
        resolveAudioParam={
          (key) => processor.node.parameters.get(key)
        }
      />
    </SynthNode>
  );
};
