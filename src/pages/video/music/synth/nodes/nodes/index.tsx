import type { FC } from "react";
import { MusicSynthNodesSourceNode } from "~/pages/video/music/synth/nodes/nodes/node";
import {
  TGraphNodeWithId,
  TGraphSourceWithId,
} from "~/pages/video/music/_context/refs/audio/graph/types";

type TProps = {
  source: TGraphSourceWithId;
};
export const MusicSynthNodesSourceNodes: FC<
  TProps
> = ({ source }) => {
  return (
    <>
      {source.nodes.map(
        (
          node: TGraphNodeWithId,
          index
        ) => (
          <MusicSynthNodesSourceNode
            key={node.key}
            node={node}
            index={index}
            source={source}
          />
        )
      )}
    </>
  );
};
