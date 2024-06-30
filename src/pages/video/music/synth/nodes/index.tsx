import type { FC } from "react";
import { cx } from "class-variance-authority";
import { NodesDelay } from "~/pages/video/music/synth/nodes/delay";
import { NodesFilter } from "~/pages/video/music/synth/nodes/filter";
import { NodesGainMaster } from "~/pages/video/music/synth/nodes/gain/master";
import { NodesOscillator } from "~/pages/video/music/synth/nodes/oscillator";
import { box } from "~uno/rules/box";
import { NodesGainPreamp } from "~/pages/video/music/synth/nodes/gain/preamp";
import { SynthSource } from "~/pages/video/music/synth/source";
import { NodesKarplusStrong } from "~/pages/video/music/synth/nodes/worklets/karplus-strong";
import { NodesSource } from "~/pages/video/music/synth/nodes/source";

export const MusicSynthNodes: FC =
  () => {
    return (
      <div
        className={cx(
          "relative"
          // "items-stretch",
          // "justify-stretch"
          // "xxxs:grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 sm:grid-cols-4 xxl:grid-cols-5 xxxl:grid-cols-6"
        )}
        style={{
          display: "grid",
          gap: box.m0125,
          gridTemplateColumns: `repeat(3, 1fr)`,
          ...box.p(box.m025),
        }}
      >
        <NodesSource/>
        <div className="relative column-stretch">
          <NodesFilter />
          <NodesDelay />
          {/* <NodesBitcrusher /> */}
        </div>
        <div className="relative column-stretch">
          <NodesGainPreamp />
          <NodesGainMaster />
        </div>
      </div>
    );
  };
