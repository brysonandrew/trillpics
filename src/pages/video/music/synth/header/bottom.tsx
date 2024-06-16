import type { FC } from "react";
import { isMidiHoverKey } from "~/components/charts/grid/is-midi-hover-key";
import { VideoMusicSynthHeaderNote } from "~/pages/video/music/synth/header/note";
import { VideoMusicSynthIncrementer } from "~/pages/video/music/synth/incrementer";
import { SynthDelayDown } from "~/pages/video/music/synth/sequence/delay/down";
import { SynthDelayUp } from "~/pages/video/music/synth/sequence/delay/up";
import { SynthIntervalDown } from "~/pages/video/music/synth/sequence/interval/down";
import { SynthIntervalUp } from "~/pages/video/music/synth/sequence/interval/up";
import { SynthOffsetLeft } from "~/pages/video/music/synth/sequence/offset/left";
import { SynthOffsetRight } from "~/pages/video/music/synth/sequence/offset/right";
import { SynthRepeatDown } from "~/pages/video/music/synth/sequence/repeat/down";
import { SynthRepeatUp } from "~/pages/video/music/synth/sequence/repeat/up";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { useTrillPicsStore } from "~/store/middleware";
import { boxSize } from "~uno/rules/box/size";

export const VideoMusicSynthHeaderBottom: FC =
  () => {
    const {
      synth,
      sequence,
      scale,
      hoverKeys,
    } = useTrillPicsStore(
      ({
        synth,
        hoverKeys,
        sequence,
        scale,
      }) => ({
        synth,
        sequence,
        scale,
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
          className="relative row-wrap pb-4 lg:(row pb-0)"
          style={{
            left: s.m075,
            width: width - s.m05,
            gap: s.m05,
          }}
        >
          <VideoMusicSynthIncrementer
            title={"delay"}
            Down={SynthIntervalDown}
            Up={SynthIntervalUp}
          >{`${
            sequence.delay > 0
              ? "+"
              : ""
          }${
            sequence.delay
          }`}</VideoMusicSynthIncrementer>
          <VideoMusicSynthIncrementer
            title={"repeat"}
            Down={SynthRepeatDown}
            Up={SynthRepeatUp}
          >{`${
            sequence.repeat > 0
              ? "+"
              : ""
          }${
            sequence.repeat
          }`}</VideoMusicSynthIncrementer>
          <VideoMusicSynthIncrementer
            title={"delay"}
            Down={SynthDelayDown}
            Up={SynthDelayUp}
          >{`${
            sequence.delay > 0
              ? "+"
              : ""
          }${
            sequence.delay
          }`}</VideoMusicSynthIncrementer>
          <VideoMusicSynthIncrementer
            title={"offset"}
            Down={SynthOffsetLeft}
            Up={SynthOffsetRight}
          >{`${
            sequence.offset > 0
              ? "+"
              : ""
          }${
            sequence.offset
          }`}</VideoMusicSynthIncrementer>
        </div>
      </div>
    );
  };
