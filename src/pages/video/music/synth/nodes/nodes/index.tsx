import { FC, Fragment } from "react";
import { TypographyXxxxs } from "~/components/layout/typography/xxxxs";
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
