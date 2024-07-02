import type { FC } from "react";
import { NodesDelay } from "~/pages/video/music/synth/nodes/delay";
import { NodesFilter } from "~/pages/video/music/synth/nodes/filter";
import { NodesGainMaster } from "~/pages/video/music/synth/nodes/gain/master";
import { box } from "~uno/rules/box";
import { NodesGainPreamp } from "~/pages/video/music/synth/nodes/gain/preamp";
import { NodesSource } from "~/pages/video/music/synth/nodes/source";
import { useVideoStyle } from "~/pages/video/style";
import { NodesBitcrusher } from "~/pages/video/music/synth/nodes/worklets/bitcrusher";

export const MusicSynthNodes: FC =
  () => {
    const {
      width,
      sidebarWidthOffset,
    } = useVideoStyle();
    return (
      <div
        className="relative column-stretch w-full"
        style={{
          left: sidebarWidthOffset,
          width:
            width - sidebarWidthOffset,
          ...box.p(box.m0125),
        }}
      >
        <NodesSource />
        <NodesFilter />
        <NodesDelay />
        <NodesBitcrusher />
        <NodesGainPreamp />
        <NodesGainMaster />
      </div>
    );
  };
