import { PlaybackProgressSeeker } from "~/pages/video/player/_controls/playback/progress/seeker";
import { PlayerBackground } from "~/pages/video/player/_background";
import { boxRadius } from "~/constants/box/radius";
import { PlayerBackgroundOpaque } from "~/pages/video/player/_background/opaque";
import { PlaybackButtons } from "~/pages/video/player/_controls/playback/buttons";

export const OVERFLOW_HIDDEN =
  "overflow: hidden;";

export const VideoPlayer_Controls =
  () => {
    const borderRadius = boxRadius();

    return (
      <>
        <PlaybackButtons />
        <div
          className="relative w-full"
          style={{
            borderRadius,
          }}
        >
          <PlayerBackgroundOpaque />
          <div
            className="absolute inset-0 _gradient-radial"
            style={{
              borderRadius,
            }}
          />
          <PlayerBackground />
          <div className="absolute inset-0 bg-black-05 rounded-lg _gradient-mesh opacity-60" />
          <PlaybackProgressSeeker />
        </div>
      </>
    );
  };
