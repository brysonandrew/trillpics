import { FC } from "react";
import { VideoMusicGrid } from "~/pages/video/music/grid";
import { VideoMusicSynthHeader } from "~/pages/video/music/synth/header";
import { useTrillPicsStore } from "~/store/middleware";

export const VideoMusicSynth: FC =
  () => {
    const { synthSteps } =
      useTrillPicsStore(
        ({ synthSteps }) => ({
          synthSteps,
        })
      );

    return (
      <>
        <VideoMusicSynthHeader />
        <VideoMusicGrid
          presets={{
            synth: synthSteps,
          }}
        />
      </>
    );
  };
