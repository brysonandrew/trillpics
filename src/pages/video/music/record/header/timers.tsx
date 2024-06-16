import type { FC } from "react";
import clsx from "clsx";
import { LinesHorizontalLight } from "~/components/lines/horizontal/light";
import { TimerDisplay } from "~/components/playback/timer/display";
import { useMusicRecorderContext } from "~/pages/video/music/_context/recorder";
import { boxSize } from "~uno/rules/box/size";
import { MeshBackgroundText } from "~/components/layout/background/mesh/text";
import { VideoMusicHeaderTimer } from "~/pages/video/music/header/timer";
import { useTrillPicsStore } from "~/store/middleware";
import { SecondsCalculation } from "~/pages/video/music/record/header/calc";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import { STEPS_COUNT } from "~/constants/music/timing";

export const VideoMusicPlaybackHeaderTimers: FC =
  () => {
    const s = boxSize();
    const {
      isRecording,
      isCooldown,
      audioSeconds,
    } = useMusicRecorderContext();
    const videoSeconds =
      usePicVideoReadSeconds();
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
          isActive={isRecording}
          isCooldown={isCooldown}
          seconds={videoSeconds}
          stepsCount={STEPS_COUNT}
          progressKey="recorder"
        />
        <LinesHorizontalLight />
        <span className="uppercase font-sans text-xxs">
          audio
        </span>
        <LinesHorizontalLight />
        <div className="relative">
          <MeshBackgroundText classValue="row gap-2">
            <TimerDisplay
              elapsed={audioSeconds}
              unit="seconds"
            />
          </MeshBackgroundText>
          <SecondsCalculation />
        </div>

        <LinesHorizontalLight />
        <span className="uppercase font-sans text-xxs">
          video
        </span>

        <LinesHorizontalLight />
        <TimerDisplay
          elapsed={videoSeconds}
          unit="seconds"
        />
      </div>
    );
  };
