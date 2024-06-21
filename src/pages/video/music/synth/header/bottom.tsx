import type { FC } from "react";
import { isMidiHoverKey } from "~/components/charts/grid/is-midi-hover-key";
import { VideoMusicSynthHeaderNote } from "~/pages/video/music/synth/header/note";
import { useTrillPicsStore } from "~/store/middleware";
import { boxSize } from "~uno/rules/box/size";

export const VideoMusicSynthHeaderBottom: FC =
  () => {
    const { hoverKeys } =
      useTrillPicsStore(
        ({ hoverKeys }) => ({
          hoverKeys,
        })
      );
    const s = boxSize();
    const midiHoverKey = hoverKeys.find(
      (v) => isMidiHoverKey(v)
    );
    return (
      <div
        className="relative row lg:row"
        style={{
          top: 0,
          left: s.m0125,
          gap: s.m05,
          paddingRight: s.m05,
        }}
      >
        <VideoMusicSynthHeaderNote
          midiHoverKey={midiHoverKey}
        />
      </div>
    );
  };
