import { FC } from "react";
import { VideoMusicGrid } from "~/pages/video/music/grid";
import { VideoMusicSynthHeader } from "~/pages/video/music/synth/header";
import { useTrillPicsStore } from "~/store/middleware";
import { boxSize } from "~uno/rules/box/size";

export const VideoMusicSynth: FC =
  () => {
    const { options, synthSteps } =
      useTrillPicsStore(
        ({ options, synthSteps }) => ({
          options,
          synthSteps,
        })
      );

    const s = boxSize();
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
