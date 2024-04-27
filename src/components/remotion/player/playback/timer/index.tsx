import { FC } from "react";
import { useTrillPicsStore } from "~/store";
import { TimerDisplay } from "~/components/remotion/player/playback/timer/display";
import { TimerCurrent } from "~/components/remotion/player/playback/timer/current";

export const PlaybackTimer: FC = () => {
  const { durationInFrames } =
    useTrillPicsStore(
      ({ durationInFrames }) => ({
        durationInFrames,
      })
    );

  return (
    <div className="relative flex shrink-0 grow-0 items-center text-left">
      <TimerCurrent />
      <div className="flex text-gray-9">
        <span className="px-1">/</span>
        <TimerDisplay
          frame={durationInFrames}
        />
      </div>
    </div>
  );
};
