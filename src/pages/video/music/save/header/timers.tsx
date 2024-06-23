import type { FC } from "react";
import clsx from "clsx";
import { LinesHorizontalLight } from "~/components/lines/horizontal/light";
import { TimerDisplay } from "~/components/playback/timer/display";
import { useContextMusicRecorder } from "~/pages/video/music/_context/recorder";
import { box } from "~uno/rules/box";
import { MeshBackgroundText } from "~/components/layout/background/mesh/text";
import { VideoMusicHeaderTimer } from "~/pages/video/music/layout/header/timer";
import { SecondsCalculation } from "~/pages/video/music/save/header/calc";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import { STEPS_COUNT } from "~/constants/music/timing";

export const VideoMusicSaveHeaderTimers: FC =
  () => {
    
    const {
      isRecording,
      isCooldown,
      audioSeconds,
    } = useContextMusicRecorder();
    const videoSeconds =
      usePicVideoReadSeconds();
    return (
      <div
        className={clsx(
          "row w-full grow",
          "font-slab text-left text-sm text-white dark:text-gray"
        )}
        style={{
          gap: box.m0125,
          paddingTop: box.m0125,
        }}
      >
        <VideoMusicHeaderTimer
          isActive={isRecording}
          isCooldown={isCooldown}
          seconds={videoSeconds}
          stepsCount={STEPS_COUNT}
          progressKey="track"
        />
        <LinesHorizontalLight />
        <TimerDisplay
          elapsed={videoSeconds}
          unit="seconds"
        />
      </div>
    );
  };
  // <LinesHorizontalLight />
  // <span className="uppercase font-sans text-xxs">
  //   audio
  // </span>
  // <LinesHorizontalLight />
  // <div className="relative">
  //   <MeshBackgroundText classValue="row gap-2">
  //     <TimerDisplay
  //       elapsed={audioSeconds}
  //       unit="seconds"
  //     />
  //   </MeshBackgroundText>
  //   <SecondsCalculation />
  // </div>


  // <LinesHorizontalLight />
  // <span className="uppercase font-sans text-xxs">
  //   video
  // </span>
