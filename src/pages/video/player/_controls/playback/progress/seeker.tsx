import { memo, type FC } from "react";
import { useSeek } from "~/pages/video/player/_controls/playback/progress/use-seek";
import clsx from "clsx";
import {} from "~/hoc/ref/with-player-instance-check";
import { TimerCurrentProgress } from "~/pages/video/player/_controls/playback/progress";
import { useInitContext } from "~/shell/init/context";

export const PlaybackProgressSeeker: FC =
  memo(() => {
    const { main } = useInitContext();
    const { handler } = useSeek();
    return (
      <div
        className={clsx(
          "relative flex grow w-full h-4 bg-transparent"
        )}
        onPointerDown={handler}
      >
        <TimerCurrentProgress
          progress={main.timer}
        />
      </div>
    );
  });
