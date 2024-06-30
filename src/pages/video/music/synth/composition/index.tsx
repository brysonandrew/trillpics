import type { FC } from "react";
import { BackgroundGlass } from "~/components/layout/background/glass";
import { useVideoStyle } from "~/pages/video/style";
import { COLOR_SHADE_RECORD } from "~uno/color";
import { box } from "~uno/rules/box";
import { MusicScale } from "~/pages/video/music/synth/composition/scale";
import { MusicSequence } from "~/pages/video/music/synth/composition/sequence";

export const MusicSynthComposition: FC =
  () => {
    const {
      width,
    } = useVideoStyle();
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
              backgroundColor:
                COLOR_SHADE_RECORD[
                  "dark-04"
                ],
            }}
          />
          <div
            className="relative grid flex-row flex-wrap items-stretch justify-stretch"
            style={{
              left: 0,
              gap: box.m0125,
              width: width + box.m025,
              //  -
              // sidebarWidthOffset,
              ...box.p(box.m0125),
              gridTemplateColumns: `repeat(auto-fill, minmax(${box.m5}px, 1fr))`,
            }}
          >
            <MusicScale />
            <MusicSequence />
            
          </div>
        </div>
      </>
    );
  };
