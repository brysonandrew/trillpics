import { type FC } from "react";
import { PlaybackButtonsBackward } from "@/remotion/player/playback/buttons/backward";
import { PlaybackButtonsForward } from "@/remotion/player/playback/buttons/forward";
import { PlaybackButtonsPlay } from "@/remotion/player/playback/buttons/play";
import { PlaybackButtonsBack } from "@/remotion/player/playback/buttons/back";

export const PlaybackButtons: FC =
  () => {
    return (
      <div className="relative row gap-1 shrink-0">
        <PlaybackButtonsBack/>
        <PlaybackButtonsBackward />
        <PlaybackButtonsPlay />
        <PlaybackButtonsForward />
      </div>
    );
  };
