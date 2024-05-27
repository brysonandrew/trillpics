import type { FC } from "react";
import { PlaybackButtons } from "~/components/remotion/player/playback/buttons/left";
import { PlaybackTimer } from "~/components/remotion/player/playback/timer";
import { LightingGlow } from "~/components/layout/lighting/glow";
import clsx from "clsx";
import { boxStyle } from "~/constants/box/style";

export const PlayerPlayback: FC =
  () => {
    const {
      boxShadow,
      ...borderStyle
    } = boxStyle({
      layer: "flat",
      borderRadius: "xl",
      size: "m",
    });

    return (
        <div
          className={clsx(
            "relative flex items-center gap-6 z-10"
          )}
        >
          {/* <LightingGlow
            classValue="fill opacity-20"
            style={borderStyle}
          />
          <div
            className="absolute -inset-1 background opacity-80 gradient-radial"
            style={borderStyle}
          /> */}
          <PlaybackButtons />
          <PlaybackTimer />
        </div>
    );
  };
