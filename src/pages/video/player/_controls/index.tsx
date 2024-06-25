import { PlaybackProgressSeeker } from "~/pages/video/player/_controls/playback/progress/seeker";
import { PlayerBackground } from "~/pages/video/player/_background";
import { boxRadius } from "~uno/rules/box/radius";
import { PlayerBackgroundOpaque } from "~/pages/video/player/_background/opaque";
import { PlaybackButtons } from "~/pages/video/player/_controls/playback/buttons";
import { box } from "~uno/rules/box";

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
            height: box.m025,
          }}
        >
          <PlayerBackgroundOpaque />
          <div
            className="absolute inset-0 _bi-radial opacity-70"
            style={{
              borderRadius,
            }}
          />
          <PlayerBackground />
          <div className="fill bg-black-05 _bi-mesh opacity-20" />
          <PlaybackProgressSeeker />
        </div>
      </>
    );
  };
