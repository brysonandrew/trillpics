import { AnimatePresence } from "framer-motion";
import { RemotionPlayer } from "~/components/remotion/player";
import { usePicVideoReadInputs } from "~/hooks/pic/video/read/inputs/hook";
import { PlayerBackground } from "~/pages/video/player/_background";
import { PlayerBackgroundOpaque } from "~/pages/video/player/_background/opaque";
import { useTrillPicsStore } from "~/store/middleware";
import { VideoPlayer_ScreenGenerate } from "~/pages/video/player/_screen/generate";
import { OverlayCenter } from "~/components/layout/overlay/center";

export const OVERFLOW_HIDDEN =
  "overflow: hidden;";

export const VideoPlayer_Screen =
  () => {
    const {
      progress,
      isDownloadComplete,
    } = useTrillPicsStore(
      ({
        progress,
        isDownloadComplete,
      }) => ({
        progress,
        isDownloadComplete,
      })
    );
    const inputProps =
      usePicVideoReadInputs();
    return (
      <>
        <PlayerBackgroundOpaque />
        <PlayerBackground />
        <RemotionPlayer
          {...inputProps}
          base="remotion"
        />
        <AnimatePresence mode="wait">
          {isDownloadComplete && (
            <OverlayCenter>
              <h3 className="dark:text-black text-white uppercase font-slab tracking-wide text-2xl md:text-6xl lg:text-8xl text-center _bi-text">
                Download complete
              </h3>
            </OverlayCenter>
          )}
          {progress !== null && (
            <VideoPlayer_ScreenGenerate
              key="VideoPlayer_ScreenGenerate"
              {...progress}
            />
          )}
        </AnimatePresence>
      </>
    );
  };
