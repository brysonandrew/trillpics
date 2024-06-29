import type { FC } from "react";
import { BackgroundGlass } from "~/components/layout/background/glass";
import { MusicScaleKey } from "~/pages/video/music/synth/scale/dropdowns/key";
import { MusicScalePattern } from "~/pages/video/music/synth/scale/dropdowns/pattern";
import { MusicSequenceNumbers } from "~/pages/video/music/synth/sequence/numbers";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";

export const MusicScale: FC = () => {
  const { sidebarWidthOffset, width } =
    useVideoStyle();
  return (
    <>
      <div
        className="relative column-start"
        style={{
          width: width + box.m025,
        }}
      >
        <BackgroundGlass
          boxStyle={{
            left: 0,
          }}
        />
        <div
          className="relative grid flex-row flex-wrap items-stretch justify-stretch"
          style={{
            left: 0,
            gap: box.m0125,
            width:
              width +
              box.m025,
              //  -
              // sidebarWidthOffset,
            ...box.p(box.m0125),
            gridTemplateColumns: `repeat(auto-fill, minmax(${box.m5}px, 1fr))`,

          }}
        >
          <MusicScaleKey />
          <MusicScalePattern />
          <MusicSequenceNumbers />
        </div>
      </div>
    </>
  );
};
