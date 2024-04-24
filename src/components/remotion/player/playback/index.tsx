import type { FC } from "react";
import { PlaybackButtons } from "~/components/remotion/player/playback/buttons";
import { PlaybackTimer } from "~/components/remotion/player/playback/timer";
import { Glow } from "~/components/decoration/glow";
import clsx from "clsx";
import { useBorderStyleMd } from "~/components/buttons/use-border-style/md";

export const PlayerPlayback: FC =
  () => {
    const borderStyle =
      useBorderStyleMd();

    return (
      <div className="relative inline-flex flex-col gap-2 text-white h-0 w-full">
        <div
          className={clsx(
            "absolute flex items-center gap-6 py-1 pl-1 pr-4 z-10"
          )}
        >
          <Glow
            classValue="fill opacity-20"
            style={borderStyle}
          />
          <div
            className="absolute -inset-1 background opacity-80 _net-gradient"
            style={borderStyle}
          />
          <PlaybackButtons />
          <PlaybackTimer />
        </div>
      </div>
    );
  };
