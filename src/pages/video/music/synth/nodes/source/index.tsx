import { FC, useRef } from "react";
import { resolveSquare } from "@brysonandrew/measure";
import { MusicSynthNodesSourceNodes } from "~/pages/video/music/synth/nodes/nodes";
import { MusicSynthNodesSourceType } from "~/pages/video/music/synth/types";
import { TGraphSource } from "~/pages/video/music/_context/refs/audio/graph/types";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";

type TProps = { source: TGraphSource };

export const MusicSynthNodesSource: FC<
  TProps
> = ({ source }) => {
  const ref =
    useRef<null | HTMLDivElement>(null);
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
          <MusicSynthNodesSourceType
            source={source}
            containerRef={ref}
          />
          <MusicSynthNodesSourceNodes
            containerRef={ref}
            source={source}
          />
        </div>
        <div
          ref={ref}
          className="relative column-stretch"
          style={{
            width:
              width -
              sidebarWidthOffset +
              box.m0125,
          }}
        ></div>
      </div>
    </div>
  );
};
