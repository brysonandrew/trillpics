import { memo, type FC } from "react";
import { useSeek } from "~/components/remotion/player/playback/progress/use-seek";
import { TimerCurrentProgress } from "~/components/remotion/player/playback/progress";
import clsx from "clsx";
import {  } from "~/hoc/ref/with-player-instance-check";

export const PlaybackProgressSeeker: FC =
  memo(() => {
    const {
      handler,
      durationInFrames,
    } = useSeek();
    return (
      <div
        className={clsx(
          "relative flex grow w-full h-4 bg-transparent"
          // "border border-white-05 dark:border-black"
        )}
        onPointerDown={handler}
        // onPointerUp={handler}
      >
        {/* <div className="absolute inset-0 rounded-lg _gradient-mesh blur-lg opacity-100"/> */}
        {/* <div className="absolute -inset-2 rounded-lg _gradient-mesh blur-lg opacity-100"/> */}
        <TimerCurrentProgress
          durationInFrames={
            durationInFrames
          }
        />
      </div>
    );
  });
