import type { FC } from "react";
import { useCircleButtonStyle } from "@/components/buttons/use-circle-button-style/sm";
import { Background1 } from "@/components/decoration/background/1";
import { PlaybackButtons } from "@/remotion/player/playback/buttons";
import { PlaybackTimer } from "@/remotion/player/playback/timer";
import { useCircleButtonStyleMd } from "@/components/buttons/use-circle-button-style/md";

export const PlayerPlayback: FC =
  () => {
    const { width, ...style } =
      useCircleButtonStyleMd();
    return (
      <div className="relative inline-flex items-center gap-4 p-1 pr-4 text-white">
        <Background1 style={style} />
        <PlaybackButtons />
        <PlaybackTimer />
      </div>
    );
  };
