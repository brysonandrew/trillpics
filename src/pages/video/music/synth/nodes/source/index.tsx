import { FC } from "react";
import { MusicSynthNodesSourceNodes } from "~/pages/video/music/synth/nodes/nodes";
import { MusicSynthNodesSourceEntry } from "~/pages/video/music/synth/nodes/source/entry";
import { TGraphSourceWithId } from "~/pages/video/music/_context/refs/audio/graph/types";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { GRAPH_LAYOUT_KEYS } from "~/pages/video/music/synth/nodes/constants";

type TProps = {
  source: TGraphSourceWithId;
  sourceIndex: number;
};
export const MusicSynthNodesSource: FC<
  TProps
> = ({ source, sourceIndex }) => {
  const { layout } = useMusicRefs();
  const { width, sidebarWidthOffset } =
    useVideoStyle();
  return (
    <div
      className="row-start"
      style={{
        gap: box._0125,
      }}
    >
      <div
        className="column relative"
        style={{
          width: box._2,
          gap: box._025,
        }}
      >
        <MusicSynthNodesSourceEntry
          source={source}
          sourceIndex={sourceIndex}
        />
        <MusicSynthNodesSourceNodes
          source={source}
        />
      </div>
      <div
        className="relative column-stretch"
        style={{
          width:
            width -
            sidebarWidthOffset +
            box._0125,
          gap: box._025,
          left: box._025,
        }}
      >
        {GRAPH_LAYOUT_KEYS.map(
          (key) => (
            <div
              key={key}
              ref={(instance) => {
                if (!instance) return;
                layout.update(
                  "graph",
                  key,
                  instance
                );
              }}
              className="relative column-stretch"
              style={{
                gap: box._0125,
                ...box.py(box._025),
              }}
            />
          )
        )}
      </div>
    </div>
  );
};
