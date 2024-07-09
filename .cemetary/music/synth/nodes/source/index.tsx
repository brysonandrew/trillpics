import { FC } from "react";
import { MusicSynthNodesSourceNodes } from "~/pages/video/music/synth/nodes/nodes";
import { MusicSynthNodesSourceEntry } from "~/pages/video/music/synth/nodes/source/entry";
import { TGraphSourceWithId } from "~/pages/video/music/_context/refs/audio/graph/types";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";

type TProps = {
  source: TGraphSourceWithId;
  sourceIndex: number;
};
export const MusicSynthNodesSource: FC<
  TProps
> = ({ source, sourceIndex }) => {
  const { width, sidebarWidthOffset } =
    useVideoStyle();
  const sourceProps = {
    source,
    sourceIndex,
  };
  return (
    <div className="row-start">
      <div className="column relative" />
      <div
        className="relative column-stretch bg-red"
        style={{
          width:
            width -
            sidebarWidthOffset -
            box._025 -
            box._0125,
          gap: box._025,
          left:
            sidebarWidthOffset +
            box._025 +
            box._0125,
        }}
      >
        <MusicSynthNodesSourceEntry
          {...sourceProps}
        />
        <MusicSynthNodesSourceNodes
          {...sourceProps}
        />
   
      </div>
    </div>
  );
};
