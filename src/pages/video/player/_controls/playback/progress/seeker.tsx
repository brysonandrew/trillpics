import { memo, type FC } from "react";
import { useSeek } from "~/pages/video/player/_controls/playback/progress/use-seek";
import clsx from "clsx";
import { TimerCurrentProgress } from "~/pages/video/player/_controls/playback/progress";
import { useContextInit } from "~/shell/init/context";
import { box } from "~uno/rules/box";

export const PlaybackProgressSeeker: FC =
  memo(() => {
    const { main } = useContextInit();
    const { handler } = useSeek();
    return (
      <div
        className={clsx(
          "relative flex grow w-full h-full bg-transparent"
        )}
        onPointerDown={handler}
      >
        <TimerCurrentProgress
          progress={main.timer}
        />
      </div>
    );
  });
