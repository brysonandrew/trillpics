import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { RemotionPlayer } from "~/components/remotion/player";
import { usePicVideoReadInputs } from "~/hooks/pic/video/read/inputs/hook";
import { PlayerBackground } from "~/pages/video/player/_background";
import { PlayerBackgroundOpaque } from "~/pages/video/player/_background/opaque";
import { useTrillPicsStore } from "~/store/middleware";
import { VideoPlayer_ScreenGenerate } from "~/pages/video/player/_screen/generate";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";

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
    const { set, audioBlob } =
      useTrillPicsStore(
        ({ set, audioBlob }) => ({
          set,
          audioBlob,
        })
      );
      console.log(audioBlob)
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
            <motion.div
              key="isDownloadComplete"
              className="fill center"
              {...PRESENCE_OPACITY}
              transition={{
                duration: 1,
                ease: "linear",
              }}
            >
              <h3 className="dark:text-black text-white uppercase font-slab tracking-wide text-2xl md:text-6xl lg:text-8xl text-center _gradient-text">
                Download complete
              </h3>
            </motion.div>
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
