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
import { useVideoStyle } from "~/pages/video/style";
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
        className="relative row lg:row justify-stretch w-full"
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
        <VideoMusicSynthIncrementer
          name="interval"
        />
        <VideoMusicSynthIncrementer
          name="delay"
        />
        <VideoMusicSynthIncrementer
          name="repeat"
        />

        <VideoMusicSynthIncrementer
          name="offset"
          direction='x'
        />
      </div>
    );
  };
