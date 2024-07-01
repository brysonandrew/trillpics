import type { FC } from "react";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";
import { MusicScale } from "~/pages/video/music/synth/composition/scale";
import { MusicSequence } from "~/pages/video/music/synth/composition/sequence";
import { DarkGlass } from "~/pages/video/music/layout/glass/dark";
import { SequenceButtonsOffset } from "~/pages/video/music/synth/composition/sequence/buttons/offset";

export const MusicSynthComposition: FC =
  () => {
    const { width } = useVideoStyle();
    return (
      <>
        <div
          className="relative column-start"
          style={{
            width: width + box.m025,
          }}
        >
          <DarkGlass />
          <MusicScale />

          <div
            className="relative flex flex-row flex-wrap items-stretch justify-stretch"
            style={{
              left: 0,
              gap: box.m0125,
              width: width + box.m025,
              ...box.p(box.m0125),
              // gridTemplateColumns: `repeat(auto-fill, minmax(${box.m5}px, 1fr))`,
            }}
          >
            <MusicSequence />
            <SequenceButtonsOffset />

          </div>
        </div>
      </>
    );
  };
