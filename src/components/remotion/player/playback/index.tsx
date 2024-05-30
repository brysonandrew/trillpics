import type { FC } from "react";
import { PlaybackTimer } from "~/components/remotion/player/playback/timer";
import clsx from "clsx";
import { boxStyle } from "~/constants/box/style";
import { PlaybackButtons } from "~/components/remotion/player/playback/buttons";

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
