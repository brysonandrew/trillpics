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
import { usePlaybackSchedule } from "~/pages/video/music/header/playback-schedule";
import { useTrillPicsStore } from "~/store/middleware";
import { LinesHorizontal } from "~/components/lines/horizontal";

export const VideoMusicSynthHeaderTop: FC =
  () => {
    const s = boxSize();
    const midis = usePlayMidis();
    const stop = midis.stop;
    const { steps } = useTrillPicsStore(
      ({ steps }) => ({ steps })
    );
    const { start, ...props } =
      usePlaybackSchedule({ stop });
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
            start();
          }
        }}
        leftContent={
          <VideoMusicHeaderTimer
            stepsCount={steps.length}
            {...props}
          />
        }
        rightContent={
          <>
            <LinesHorizontal />
            <div
              className="row relative"
              style={{
                gap: s.m025,
              }}
            >
              <SynthType />
              <SynthScaleKey />
            </div>
            <SynthScalePattern />
            <SynthReload />
          </>
        }
      >
        Synth
      </MusicLayoutHeader>
    );
  };
