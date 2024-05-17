import { type FC } from "react";
import { useSeek } from "~/components/remotion/player/playback/progress/use-seek";
import { TimerCurrentProgress } from "~/components/remotion/player/playback/progress";
import { LightingGlow } from "~/components/layout/lighting/glow";
import clsx from "clsx";
import { TexturesMeshRounded } from "~/components/textures/mesh/rounded";

export const PlaybackProgressSeeker: FC =
  () => {
    const {
      handler,
      durationInFrames,
    } = useSeek();
    return (
      <div
        className={clsx(
          "relative flex grow w-full h-4 background"
        )}
        onPointerDown={handler}
      >
        <LightingGlow classValue="fill opacity-20" />
        <TexturesMeshRounded />
        <TimerCurrentProgress
          durationInFrames={
            durationInFrames
          }
        />
      </div>
    );
  };
