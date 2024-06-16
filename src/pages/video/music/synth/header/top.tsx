import type { FC } from "react";
import { usePlayMidis } from "~/hooks/music/play/midis";
import { MusicLayoutHeader } from "~/pages/video/music/header";
import { boxSize } from "~uno/rules/box/size";
import { IconsPlay } from "~/components/icons/playback/play";
import { SynthReload } from "~/pages/video/music/synth/sequence/reload";
import { SynthType } from "~/pages/video/music/synth/type";
import { SynthScalePattern } from "~/pages/video/music/synth/scale/pattern";
import { SynthScaleKey } from "~/pages/video/music/synth/scale/key";
import { IconsStop } from "~/components/icons/playback/stop";
import { VideoMusicHeaderTimer } from "~/pages/video/music/header/timer";
import { useTrillPicsStore } from "~/store/middleware";
import { LinesHorizontalLight } from "~/components/lines/horizontal/light";
import { useAudioSeconds } from "~/hooks/music/time/audio-seconds";

export const VideoMusicSynthHeaderTop: FC =
  () => {
    const s = boxSize();
    const midis = usePlayMidis();
    const { steps } = useTrillPicsStore(
      ({ steps }) => ({ steps })
    );
    const audioSeconds =
      useAudioSeconds();
    return (
      <MusicLayoutHeader
        Icon={
          midis.isPlaying
            ? IconsStop
            : IconsPlay
        }
        onClick={() => {
          if (midis.isPlaying) {
            midis.stop();
          } else {
            midis.play();
          }
        }}
        leftContent={
          <VideoMusicHeaderTimer
            stepsCount={steps.length}
            isActive={midis.isPlaying}
            seconds={audioSeconds}
            progressKey="midis"
            isCooldown={midis.isCooldown}

          />
        }
        rightContent={
          <>
            <LinesHorizontalLight />
            <div
              className="row relative"
              style={{
                gap: s.m025,
              }}
            >
              <SynthType />
              <SynthScaleKey />
              <SynthScalePattern />
            </div>
            <SynthReload />
          </>
        }
      >
        Synth
      </MusicLayoutHeader>
    );
  };
