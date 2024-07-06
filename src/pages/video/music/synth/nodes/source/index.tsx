import { FC } from "react";
import { resolveSquare } from "@brysonandrew/measure";
import { MusicSynthNodesSourceNodes } from "~/pages/video/music/synth/nodes/nodes";
import { MusicSynthNodesSourceStart } from "~/pages/video/music/synth/nodes/source/start";
import { TGraphSourceWithId } from "~/pages/video/music/_context/refs/audio/graph/types";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { GRAPH_LAYOUT_KEYS } from "~/pages/video/music/synth/nodes/constants";
import { key } from "localforage";

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
    <div className="column-stretch">
      <div className="row-start">
        <div
          className="column relative left-0"
          style={{
            ...resolveSquare(box.m),
            width: box.m2,
            gap: box.m025,
            paddingRight: box.m025,
          }}
        >
          <MusicSynthNodesSourceStart
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
              box.m0125,
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
              ></div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
