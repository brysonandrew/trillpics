import { memo, type FC } from "react";
import { useSeek } from "~/pages/video/player/_controls/playback/progress/use-seek";
import { TimerCurrentProgress } from "~/pages/video/player/_controls/playback/progress";
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
        )}
        onPointerDown={handler}
        // onPointerUp={handler}
      >
        <TimerCurrentProgress
          durationInFrames={
            durationInFrames
          }
        />
      </div>
    );
  });
