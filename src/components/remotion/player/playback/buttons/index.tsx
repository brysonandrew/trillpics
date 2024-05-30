import type { FC } from "react";
import { PlaybackButtonsBack } from "~/components/remotion/player/playback/buttons/back";
import { PlaybackButtonsBackward } from "~/components/remotion/player/playback/buttons/backward";
import { PlaybackButtonsForward } from "~/components/remotion/player/playback/buttons/forward";
import { PlaybackButtonsFullscreen } from "~/components/remotion/player/playback/buttons/fullscreen";
import { PlaybackButtonsMute } from "~/components/remotion/player/playback/buttons/mute";
import { PlaybackButtonsPlay } from "~/components/remotion/player/playback/buttons/play";
import { PlaybackTimer } from "~/components/remotion/player/playback/timer";
import { PlayerBackground } from "~/pages/video/player/_background";
import { PlayerBackgroundOpaque } from "~/pages/video/player/_background/opaque";
import { Download } from "~/pages/video/player/_controls/download";

export const PlaybackButtons: FC =
  () => {
    return (
      <div className="relative row-wrap md:row-space">
        <PlayerBackgroundOpaque />
        <PlayerBackground />
        <div className="relative row gap-6">
          <div className="relative row gap-2 shrink-0">
            <PlaybackButtonsBack />
            <PlaybackButtonsBackward />
            <PlaybackButtonsPlay />
            <PlaybackButtonsForward />
          </div>
          <PlaybackTimer />
        </div>
        <div className="relative flex gap-2">
          <PlaybackButtonsMute direction="rtl" />
          <PlaybackButtonsFullscreen direction="rtl" />
          <Download direction="rtl" />
        </div>
      </div>
    );
  };
