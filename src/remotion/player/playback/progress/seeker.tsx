import { type FC } from "react";
import { useSeek } from "~/remotion/player/playback/progress/use-seek";
import { TimerCurrentProgress } from "~/remotion/player/playback/progress";
import { Glow } from "~/components/decoration/glow";
import { DecorationNet } from "~/components/decoration/background/net";
import clsx from "clsx";

export const PlaybackProgressSeeker: FC =
  () => {
    const {
      handler,
      durationInFrames,
    } = useSeek();
    return (
      <div
        className={clsx(
          "absolute top-full translate-y-2 flex grow w-full h-4 background"
        )}
        onPointerDown={handler}
      >
        <Glow classValue="fill opacity-20" />
        <DecorationNet />
        <TimerCurrentProgress
          durationInFrames={
            durationInFrames
          }
        />
      </div>
    );
  };
