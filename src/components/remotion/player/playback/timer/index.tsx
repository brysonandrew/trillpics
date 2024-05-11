import { FC } from "react";
import { useTrillPicsStore } from "~/store/middleware";
import { TimerDisplay } from "~/components/remotion/player/playback/timer/display";
import { TimerCurrent } from "~/components/remotion/player/playback/timer/current";
import { usePicVideo } from "~/hooks/pic/video";

export const PlaybackTimer: FC = () => {
  const { seconds, count } =
    usePicVideo();
  const { fps } = useTrillPicsStore(
    ({ fps }) => ({
      fps,
    })
  );

  return (
    <div className="relative flex shrink-0 grow-0 items-center text-left text-black">
      <TimerCurrent />
      <div className="flex text-black-9">
        <span className="px-1">/</span>
        <TimerDisplay
          frame={
            count * seconds * fps
          }
        />
      </div>
    </div>
  );
};
