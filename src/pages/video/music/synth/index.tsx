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
            left: sidebarWidthOffset+s.m03125,
            width:
              width -
              sidebarWidthOffset+s.m025-s.m0625,
          }}
        >
          {(props) => (
            <div
              className="absolute fill"
              style={{
                left: -sidebarWidthOffset/2,
                height: s.m2,
                width: s.m05,
              }}
            >
              <ChartsGridStaff style={{opacity: 0.4}} >
                {(index) => (
                  <div className={clsx("absolute row right-full top-1/2 text-xxxs text-white -translate-y-1/2",index%2===0 ? '-translate-x-4' : '-translate-x-1')}>{(synth.midi??0) + index}</div>
                )}
              </ChartsGridStaff>
            </div>
          )}
        </ChartsGrid>
      </>
    );
  };
