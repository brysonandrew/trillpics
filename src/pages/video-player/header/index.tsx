import type { FC } from "react";
import { Generate } from "~/pages/video-player/header/generate";
import { PlayerPlayback } from "~/components/remotion/player/playback";

export const PlayerHeader: FC = () => {
  return (
    <div className="absolute row-space container top-4 left-1/2 -translate-x-1/2">
      <PlayerPlayback />
      <Generate />
    </div>
  );
};
