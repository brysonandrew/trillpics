import type { FC } from "react";
import { PlaybackButtons } from "~/remotion/player/playback/buttons";
import { PlaybackTimer } from "~/remotion/player/playback/timer";
import { Glow } from "~/components/decoration/glow";
import clsx from "clsx";
import { useBorderStyleMd } from "~/components/buttons/use-border-style/md";

export const PlayerPlayback: FC =
  () => {
    const borderStyle =
      useBorderStyleMd();

    return (
      <div className="relative inline-flex flex-col gap-2 text-white h-0 w-full">
        <Glow classValue="fill opacity-20" />
        <div
          className={clsx(
            "absolute flex items-center gap-6 py-1 pl-1 pr-4 z-10 background _net-gradient"
          )}
          style={borderStyle}
        >
          <PlaybackButtons />
          <PlaybackTimer />
        </div>
      </div>
    );
  };
