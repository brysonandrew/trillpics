import type { FC } from "react";
import { NodesDelay } from "~/pages/video/music/synth/nodes/delay";
import { NodesFilter } from "~/pages/video/music/synth/nodes/filter";
import { NodesOscillator } from "~/pages/video/music/synth/nodes/oscillator";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";

export const MusicSynthNodes: FC =
  () => {
    return (
        <div
          className="relative grid gap-2"
          style={{
            display: "grid",
            gap: box.m025,
            gridTemplateColumns: `repeat(auto-fill, minmax(${box.m6}px, 1fr))`,
            ...box.p(box.m025)
          }}
        >
          <NodesOscillator />
          <NodesFilter />
          <NodesDelay />
        </div>
    );
  };
