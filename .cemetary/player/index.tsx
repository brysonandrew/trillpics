import type { FC } from "react";
import { PlaybackTimer } from "~/pages/video/player/_controls/playback/timer";
import clsx from "clsx";
import { PlaybackButtons } from "~/pages/video/player/_controls/playback/buttons";

export const PlayerPlayback: FC =
  () => {

    return (
        <div
          className={clsx(
            "relative flex items-center gap-6 z-10"
          )}
        >
          <PlaybackButtons />
          <PlaybackTimer />
        </div>
    );
  };
