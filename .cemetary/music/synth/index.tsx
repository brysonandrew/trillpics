import { FC } from "react";
import { ChartsGrid } from "~/components/charts/grid";
import { ChartsGridStaff } from "~/components/charts/grid/staff";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";
import { VideoMusicSynthHeader } from "~/pages/video/music/synth/header";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { SynthRange } from "~/pages/video/music/synth/range";

export const VideoMusicSynth: FC =
  () => {
    const {
      sidebarWidthOffset,
      width,
    } = useVideoStyle();
    const { schedule } = useMusicRefs();

    return (
      <>
        <div
          className="relative column-start"
          style={{
            width: width + box._025,
          }}
        >
          <VideoMusicSynthHeader />
        </div>

        <ChartsGrid
          musicKey="midis"
          Background={ChartsGridStaff}
          presets={{
            synth:
              schedule.record.steps,
          }}
          style={{
            left:
              sidebarWidthOffset +
              box._003125,
            width:
              width -
              sidebarWidthOffset +
              box._025 -
              box._00625,
          }}
        >
          {({ rowIndex }) => (
            <div
              className="absolute fill"
              style={{
                left:
                  -sidebarWidthOffset /
                  2,
                height: box._2,
                width: box._05,
              }}
            >
              <SynthRange
                rowIndex={rowIndex}
              />
            </div>
          )}
        </ChartsGrid>
      </>
    );
  };
