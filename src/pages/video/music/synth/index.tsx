import { FC } from "react";
import { ChartsGrid } from "~/components/charts/grid";
import { VideoMusicSynthHeader } from "~/pages/video/music/synth/header";
import { useTrillPicsStore } from "~/store/middleware";

export const VideoMusicSynth: FC =
  () => {
    const { steps } = useTrillPicsStore(
      ({ steps }) => ({
        steps,
      })
    );

    return (
      <>
        <VideoMusicSynthHeader />
        <ChartsGrid
          presets={{
            synth: steps,
          }}
        />
      </>
    );
  };
