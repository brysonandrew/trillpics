import type { FC } from "react";
import { isMidiHoverKey } from "~/components/charts/grid/is-midi-hover-key";
import { VideoMusicSynthHeaderNote } from "~/pages/video/music/synth/header/note";
import { useTrillPicsStore } from "~/store/middleware";
import { box } from "~uno/rules/box";

export const VideoMusicSynthHeaderBottom: FC =
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
      <div
        className="relative row lg:row"
        style={{
          top: 0,
          left: box.m0125,
          gap: box.m05,
          paddingRight: box.m05,
        }}
      >
        <VideoMusicSynthHeaderNote
          midiHoverKey={midiHoverKey}
        />
      </div>
    );
  };
