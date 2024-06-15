import type { FC } from "react";
import clsx from "clsx";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { TimerDisplay } from "~/components/playback/timer/display";
import { useMusicRecorderContext } from "~/pages/video/music/_context/recorder";
import { boxSize } from "~uno/rules/box/size";
import { MeshBackgroundText } from "~/components/layout/background/mesh/text";
import { VideoMusicHeaderTimer } from "~/pages/video/music/header/timer";
import { useTrillPicsStore } from "~/store/middleware";
import { Calc } from "~/pages/video/music/record/header/calc";

export const VideoMusicPlaybackHeaderTimers: FC =
  () => {
    const s = boxSize();
    const { bpm } = useTrillPicsStore(
      ({ bpm }) => ({ bpm })
    );
    const {
      isRecording,
      isRecordingCooldown,
      audioSeconds,
      videoSeconds,
      loopCount,
      loopsRemainder,
    } = useMusicRecorderContext();

    // const CurrTimer = isRecording
    //   ? () => (
    //       <VideoMusicPlaybackTimerCurrent
    //         seconds={videoSeconds}
    //       />
    //     )
    //   : isRecordingCooldown
    //   ? () => (
    //       <TimerDisplay
    //         elapsed={videoSeconds}
    //         unit="seconds"
    //       />
    //     )
    //   : TimerDisplayInit;

    return (
      <div
        className={clsx(
          "row w-full grow",
          "font-slab text-left text-sm text-white dark:text-gray"
        )}
        style={{
          gap: s.m0125,
          paddingTop: s.m0125,
        }}
      >
        <VideoMusicHeaderTimer
          seconds={videoSeconds}
          isActive={isRecording}
          isCooldown={
            isRecordingCooldown
          }
        />
        <LinesHorizontal />
        <span className="uppercase font-sans text-xxs">
          audio
        </span>
        <LinesHorizontal />
        <div className="relative">
          <MeshBackgroundText classValue="row gap-2">
            <TimerDisplay
              elapsed={audioSeconds}
              unit="seconds"
            />
          </MeshBackgroundText>
          <Calc />
        </div>

        <LinesHorizontal />
        <span className="uppercase font-sans text-xxs">
          video
        </span>

        <LinesHorizontal />
        <TimerDisplay
          elapsed={videoSeconds}
          unit="seconds"
        />
      </div>
    );
  };
