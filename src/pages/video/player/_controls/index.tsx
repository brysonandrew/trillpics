import { boxSize } from "~/constants/box/size";
import { PlaybackProgressSeeker } from "~/components/remotion/player/playback/progress/seeker";
import { useContextReady } from "~/shell/ready/context";
import { PlayerBackground } from "~/pages/video/player/_background";
import { boxRadius } from "~/constants/box/radius";
import { PlayerBackgroundOpaque } from "~/pages/video/player/_background/opaque";
import { PlaybackButtons } from "~/components/remotion/player/playback/buttons";

export const OVERFLOW_HIDDEN =
  "overflow: hidden;";

export const VideoPlayer_Controls =
  () => {
    const { screen } =
      useContextReady();

    const s = boxSize();
    const borderRadius = boxRadius();
    const container = screen.container;
    return (
      <div
        className="relative flex-col flex justify-center"
        style={{
          gap: s.m025,
          width: container.width - s.m3,
        }}
      >
        <div
          className="relative flex-col flex justify-center"
          style={{
            gap:s.m05,
            width:
              container.width - s.m3,
          }}
        >
          <PlaybackButtons />
          <div
            className="relative w-full"
            style={{
              borderRadius,
              left: 0,
              width:
                container.width - s.m3,
            }}
          >
            <PlayerBackgroundOpaque />
            <div
              className="absolute inset-0 _gradient-radial"
              style={{
                borderRadius,
                left: 0,
                width:
                  container.width -
                  s.m3,
              }}
            />
            <PlayerBackground />
            <div className="absolute inset-0 bg-black-05 rounded-lg _gradient-mesh opacity-60" />
            <PlaybackProgressSeeker />
          </div>
        </div>
      </div>
    );
  };
