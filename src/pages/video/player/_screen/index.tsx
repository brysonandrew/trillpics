import { AnimatePresence } from "framer-motion";
import { RemotionPlayer } from "~/components/remotion/player";
import { boxSize } from "~/constants/box/size";
import { usePicVideoReadInputs } from "~/hooks/pic/video/read/inputs/hook";
import { useContextReady } from "~/shell/ready/context";
import { PlayerBackground } from "~/pages/video/player/_background";
import { PlayerBackgroundOpaque } from "~/pages/video/player/_background/opaque";
import { useTrillPicsStore } from "~/store/middleware";
import { VideoPlayer_ScreenGenerate } from "~/pages/video/player/_screen/generate";

export const OVERFLOW_HIDDEN =
  "overflow: hidden;";

export const VideoPlayer_Screen =
  () => {
    const { screen } =
      useContextReady();
    const { isStarted } =
      useTrillPicsStore(
        ({ isStarted }) => ({
          isStarted,
        })
      );
    const inputProps =
      usePicVideoReadInputs();
    const s = boxSize();
    const container = screen.container;
    return (
      <>
        <PlayerBackgroundOpaque />
        <PlayerBackground />
        <RemotionPlayer
          {...inputProps}
          base="remotion"
        />
        <AnimatePresence>
          {isStarted && (
            <VideoPlayer_ScreenGenerate key={'VideoPlayer_ScreenGenerate'} />
          )}
        </AnimatePresence>
      </>
    );
  };
