import { RemotionPlayer } from "~/components/remotion/player";
import { boxSize } from "~/constants/box/size";
import { usePicVideoReadInputs } from "~/hooks/pic/video/read/inputs/hook";
import { useContextReady } from "~/shell/ready/context";
import { PlayerBackground } from "~/pages/video/player/_background";
import { PlayerBackgroundOpaque } from "~/pages/video/player/_background/opaque";

export const OVERFLOW_HIDDEN =
  "overflow: hidden;";

export const VideoPlayer_Screen =
  () => {
    const { screen } =
      useContextReady();
    const inputProps =
      usePicVideoReadInputs();

    const s = boxSize();
    const container = screen.container;
    const width =
      container.width - s.m3;
    return (
      <div
        className="relative"
        style={{
          gap: s.m05,
          width,
          height: width * (9 / 16),
        }}
      >
        <PlayerBackgroundOpaque />
        <PlayerBackground />
        <RemotionPlayer
          {...inputProps}
          base="remotion"
        />
      </div>
    );
  };
