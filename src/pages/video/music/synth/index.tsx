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
            width: width + box.m025,
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
              box.m003125,
            width:
              width -
              sidebarWidthOffset +
              box.m025 -
              box.m00625,
          }}
        >
          {({ rowIndex }) => (
            <div
              className="absolute fill"
              style={{
                left:
                  -sidebarWidthOffset /
                  2,
                height: box.m2,
                width: box.m05,
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
