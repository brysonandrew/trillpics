import type { FC } from "react";
import clsx from "clsx";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { TimerDisplay } from "~/components/playback/timer/display";
import { VideoMusicPlaybackTimer } from "~/pages/video/music/record/timer";
import { useMusicRecorderContext } from "~/pages/video/music/_context/recorder";
import { boxSize } from "~uno/rules/box/size";
import { MusicLayout } from "~/pages/video/music/layout";

// type TProps ={}
export const VideoMusicPlaybackHeaderTimers: FC =
  () => {
    const s = boxSize();

    const {
      isRecording,
      audioSeconds,
      handleStart,
      loopCount,
      loopsRemainder,
    } = useMusicRecorderContext();

    return (
      <div
        className={clsx(
          "row w-full grow",
          "font-slab text-left text-sm text-white dark:text-gray"
        )}
        style={{
          gap: s.m0125,
        }}
      >
        <VideoMusicPlaybackTimer
          isPlaying={isRecording}
        />
        <LinesHorizontal />
        <div
          className="row grow pt-1 px-2 rounded-lg"
          style={{
            gap: s.m0125,
          }}
        >
          <MusicLayout classValue="row gap-2">
            <TimerDisplay
              elapsed={audioSeconds}
              unit="seconds"
            />
            <LinesHorizontal />
            {`x${loopCount}.${loopsRemainder}`}
            <LinesHorizontal />
          </MusicLayout>
        </div>
      </div>
    );
  };
