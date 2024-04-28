import type { FC } from "react";
import { PlaybackButtons } from "~/components/remotion/player/playback/buttons";
import { PlaybackTimer } from "~/components/remotion/player/playback/timer";
import { LightingGlow } from "~/components/decoration/lighting/glow";
import clsx from "clsx";
import { boxStyle } from "~/constants/box/style";

export const PlayerPlayback: FC =
  () => {
    const borderStyle = boxStyle({layer:'flat',borderRadius:'borderRadius',size:'md'})

    return (
      <div className="relative inline-flex flex-col gap-2 text-white h-0 w-full">
        <div
          className={clsx(
            "absolute flex items-center gap-6 py-1 pl-1 pr-4 z-10"
          )}
        >
          <LightingGlow
            classValue="fill opacity-20"
            style={borderStyle}
          />
          <div
            className="absolute -inset-1 background opacity-80 _weave-gradient"
            style={borderStyle}
          />
          <PlaybackButtons />
          <PlaybackTimer />
        </div>
      </div>
    );
  };
