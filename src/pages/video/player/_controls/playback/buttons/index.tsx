import type { FC } from "react";
import { PlaybackButtonsBack } from "~/pages/video/player/_controls/playback/buttons/back";
import { PlaybackButtonsBackward } from "~/pages/video/player/_controls/playback/buttons/backward";
import { PlaybackButtonsForward } from "~/pages/video/player/_controls/playback/buttons/forward";
import { PlaybackButtonsFullscreen } from "~/pages/video/player/_controls/playback/buttons/fullscreen";
import { PlaybackButtonsMute } from "~/pages/video/player/_controls/playback/buttons/mute";
import { PlaybackButtonsPlay } from "~/pages/video/player/_controls/playback/buttons/play";
import { boxSize } from "~uno/rules/box/size";
import { PlayerBackground } from "~/pages/video/player/_background";
import { PlayerBackgroundOpaque } from "~/pages/video/player/_background/opaque";
import { Download } from "~/pages/video/player/_controls/download";
import { _ControlsPlaybackTimer } from "~/pages/video/player/_controls/playback/timer";

export const PlaybackButtons: FC =
  () => {
    const s = boxSize();

    return (
      <div
        className="relative flex flex-col md:(flex-row justify-start) lg:(flex-row justify-between)"
        style={{ gap: s.m025 }}
      >
        <PlayerBackgroundOpaque />
        <PlayerBackground />
        <div className="relative row gap-2 w-full justify-start md:(justify-start w-auto) shrink-0">
          <PlaybackButtonsBack />
          <PlaybackButtonsBackward />
          <PlaybackButtonsPlay />
          <PlaybackButtonsForward />
        </div>
        <div className="py-1 center">
          {/* <_ControlsPlaybackTimer /> */}
        </div>
        <div className="relative row w-full justify-end md:(justify-end w-auto self-end grow) gap-2">
          <PlaybackButtonsMute direction="rtl" />
          <PlaybackButtonsFullscreen direction="rtl" />
          <Download direction="rtl" />
        </div>
      </div>
    );
  };
