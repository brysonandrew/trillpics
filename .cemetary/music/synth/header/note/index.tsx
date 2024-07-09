import type { FC } from "react";
import { isMidiHoverKey } from "~/components/charts/grid/is-midi-hover-key";
import { VideoMusicSynthHeaderNoteDisplay } from "~/pages/video/music/synth/header/note/display";
import { useTrillPicsStore } from "~/store/middleware";

export const VideoMusicSynthHeaderNote: FC =
  () => {
    const { hoverKeys } =
      useTrillPicsStore(
        ({ hoverKeys }) => ({
          hoverKeys,
        })
      );

    const midiHoverKey = hoverKeys.find(
      (v) => isMidiHoverKey(v)
    );
    return (
      <VideoMusicSynthHeaderNoteDisplay
        midiHoverKey={midiHoverKey}
      />
    );
  };
