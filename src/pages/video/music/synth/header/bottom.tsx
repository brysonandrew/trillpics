import type { FC } from "react";
import { isMidiHoverKey } from "~/components/charts/grid/is-midi-hover-key";
import { MeshBackgroundText } from "~/components/layout/background/mesh/text";
import { VideoMusicSynthHeaderNote } from "~/pages/video/music/synth/header/note";
import { VideoMusicSynthIncrementer } from "~/pages/video/music/synth/incrementer";
import { SynthIntervalDown } from "~/pages/video/music/synth/melody/interval/down";
import { SynthIntervalUp } from "~/pages/video/music/synth/melody/interval/up";
import { SynthOffsetLeft } from "~/pages/video/music/synth/melody/offset/left";
import { SynthOffsetRight } from "~/pages/video/music/synth/melody/offset/right";
import { SynthRepeatDown } from "~/pages/video/music/synth/melody/repeat/down";
import { SynthRepeatUp } from "~/pages/video/music/synth/melody/repeat/up";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { useTrillPicsStore } from "~/store/middleware";
import { boxSize } from "~uno/rules/box/size";

export const VideoMusicSynthHeaderBottom: FC =
  () => {
    const { synth, hoverKeys } =
      useTrillPicsStore(
        ({ synth, hoverKeys }) => ({
          synth,
          hoverKeys,
        })
      );
    const s = boxSize();
    const { width } =
      useVideoPlayerStyle();
    const midiHoverKey = hoverKeys.find(
      (v) => isMidiHoverKey(v)
    );
    return (
      <div
        className="relative row-space"
        style={{
          width: width - s.m025,
          left: 0,
        }}
      >
        <VideoMusicSynthHeaderNote
          midiHoverKey={midiHoverKey}
        />
        <div
          className="row relative"
          style={{
            left: s.m,
            width: width - s.m05,
            gap: s.m05,
          }}
        >
          <VideoMusicSynthIncrementer
            title={"interval"}
            Down={SynthIntervalDown}
            Up={SynthIntervalUp}
          >{`${
            synth.melody.interval > 0
              ? "+"
              : ""
          }${
            synth.melody.interval
          }`}</VideoMusicSynthIncrementer>
          <VideoMusicSynthIncrementer
            title={"repeat"}
            Down={SynthRepeatDown}
            Up={SynthRepeatUp}
          >{`${
            synth.melody.repeat > 0
              ? "+"
              : ""
          }${
            synth.melody.repeat
          }`}</VideoMusicSynthIncrementer>
          <VideoMusicSynthIncrementer
            title={"offset"}
            Down={SynthOffsetLeft}
            Up={SynthOffsetRight}
          >{`${
            synth.melody.offset > 0
              ? "+"
              : ""
          }${
            synth.melody.offset
          }`}</VideoMusicSynthIncrementer>
        </div>
      </div>
    );
  };
