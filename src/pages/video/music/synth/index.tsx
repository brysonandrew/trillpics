import { FC } from "react";
import { resolveSquare } from "@brysonandrew/measure";
import { ChartsGrid } from "~/components/charts/grid";
import { ChartsGridStaff } from "~/components/charts/grid/staff";
import { VideoMusicSynthHeader } from "~/pages/video/music/synth/header";
import { useVideoStyle } from "~/pages/video/style";
import { useTrillPicsStore } from "~/store/middleware";
import { box } from "~uno/rules/box";
import clsx from "clsx";

export const VideoMusicSynth: FC =
  () => {
    const s = box;
    const {
      sidebarWidthOffset,
      width,
    } = useVideoStyle();
    const { steps, synth } = useTrillPicsStore(
      ({ steps ,synth}) => ({
        steps,synth
      })
    );

    return (
      <>
        <VideoMusicSynthHeader />
        <ChartsGrid
          musicKey="midis"
          Background={ChartsGridStaff}
          presets={{
            synth: steps,
          }}
          style={{
            left: sidebarWidthOffset,
            width:
              width -
              sidebarWidthOffset,
          }}
        >
          {(props) => (
            <div
              className="absolute fill"
              style={{
                left: -sidebarWidthOffset/3,
                height: s.m2,
                width: s.m05,
              }}
            >
              <ChartsGridStaff >
                {(index) => (
                  <div className={clsx("absolute row right-full top-1/2 text-xxxs -translate-y-1/2",index%2===0 ? '-translate-x-4' : '-translate-x-1')}>{(synth.midi??0) + index}</div>
                )}
              </ChartsGridStaff>
            </div>
          )}
        </ChartsGrid>
      </>
    );
  };
