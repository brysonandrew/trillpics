import { FC } from "react";
import { MusicSynthNodesSourceNode } from "~/pages/video/music/synth/nodes/nodes/node";
import { TSourceEntryProps } from "~/pages/video/music/synth/nodes/source/types";
import { TGraphNodeWithId } from "~/pages/video/music/_context/refs/audio/graph/types";

export const MusicSynthNodesSourceNodes: FC<
  TSourceEntryProps
> = ({ source }) => {
  return (
    <div className="relative">
      {source.nodes.map(
        (
          node: TGraphNodeWithId,
          index
        ) => (
          <MusicSynthNodesSourceNode
            key={node.id}
            node={node}
            index={index}
            source={source}
          />
        )
      )}
    </div>
  );
};
