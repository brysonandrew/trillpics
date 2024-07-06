import type { FC } from "react";
import { MusicSynthNodesSourceNode } from "~/pages/video/music/synth/nodes/nodes/node";
import { TGraphNodeType, TGraphSource } from "~/pages/video/music/_context/refs/audio/graph/types";
import { TDivMutableRef } from "~/types/elements";

type TProps = {
  source: TGraphSource
  containerRef: TDivMutableRef;
};
export const MusicSynthNodesSourceNodes: FC<
  TProps
> = ({ source, containerRef }) => {
  
  return (
    <>
      {source.nodes.map((node,index) => (
        <MusicSynthNodesSourceNode
          key={node.key}
          node={node}
          index={index}
          containerRef={containerRef}
          source={source}
        />
      ))}
    </>
  );
};
