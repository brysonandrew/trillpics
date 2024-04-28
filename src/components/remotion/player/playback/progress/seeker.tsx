import { type FC } from "react";
import { useSeek } from "~/components/remotion/player/playback/progress/use-seek";
import { TimerCurrentProgress } from "~/components/remotion/player/playback/progress";
import { LightingGlow } from "~/components/decoration/lighting/glow";
import clsx from "clsx";
import { TexturesWeaveRounded } from "~/components/textures/weave/rounded";

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
        <LightingGlow classValue="fill opacity-20" />
        <TexturesWeaveRounded/>
        <TimerCurrentProgress
          durationInFrames={
            durationInFrames
          }
        />
      </div>
    );
  };
