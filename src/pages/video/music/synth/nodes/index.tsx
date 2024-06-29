import type { FC } from "react";
import { cx } from "class-variance-authority";
import { NodesDelay } from "~/pages/video/music/synth/nodes/delay";
import { NodesFilter } from "~/pages/video/music/synth/nodes/filter";
import { NodesGain } from "~/pages/video/music/synth/nodes/gain";
import { NodesOscillator } from "~/pages/video/music/synth/nodes/oscillator";
import { box } from "~uno/rules/box";

export const MusicSynthNodes: FC =
  () => {
    return (
      <div
        className={cx(
          "relative",
          // "items-stretch",
          // "justify-stretch"
          // "xxxs:grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 sm:grid-cols-4 xxl:grid-cols-5 xxxl:grid-cols-6"
        )}
        style={{
          display: "grid",
          gap: box.m0125,
          gridTemplateColumns: `repeat(2, 1fr) 0.6fr`,
          ...box.p(box.m025),
        }}
      >
        <NodesOscillator />
        <NodesFilter />
        <div style={{ 
          // width: box.m4 
          }}>
          <NodesDelay />
          <NodesGain />
        </div>
      </div>
    );
  };
