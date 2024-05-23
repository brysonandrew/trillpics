import { type FC } from "react";
import { PlaybackButtonsBackward } from "~/components/remotion/player/playback/buttons/backward";
import { PlaybackButtonsForward } from "~/components/remotion/player/playback/buttons/forward";
import { PlaybackButtonsPlay } from "~/components/remotion/player/playback/buttons/play";
import { PlaybackButtonsBack } from "~/components/remotion/player/playback/buttons/back";

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
