import {  AnimatePresence,  motion,} from "framer-motion";
import { GradientsZebraBackground } from "~/components/gradients/zebra/background";
import { useOutletContext } from "react-router";
import { TOutletContext } from "~/shell";
import { PlayerFooter } from "~/pages/video/player/_footer";
import { RemotionPlayer } from "~/components/remotion/player";
import { PlayerHeader } from "~/pages/video/player/_header";
import { PlayerFooterButtonsExit } from "~/pages/video/player/_footer/exit";
import { PlayerFooterButtonsFullscreen } from "~/pages/video/player/_footer/fullscreen";
import { useVideoPlayerAmbient } from "~/pages/video/player/_ambient";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { PlayerPlayback } from "~/components/remotion/player/playback";
import { Generate } from "~/pages/video/player/_header/generate";
import { LoadingOverlay } from "~/components/remotion/player/overlays/loading/overlay";

export const VideoPlayer = () => {
  const { Header, Footer, Screen } =
    useOutletContext<TOutletContext>();
  const {
    isPlayerInstance,
    isPlaying,
  } = useVideoPlayerAmbient();
  return (
    <>
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            key="GradientsZebraBackground"
            {...PRESENCE_OPACITY}
          >
            <GradientsZebraBackground />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fill bg-black-06 backdrop-blur-lg" />
      <Screen>
        <RemotionPlayer />
      </Screen>
      <Header>
      

      </Header>
      <Footer>
        <>
          <div className="absolute left-0 bottom-0 row-space w-full">
            <PlayerFooterButtonsExit />
            <PlayerFooterButtonsFullscreen />
          </div>
        </>
        <PlayerFooter />
      </Footer>
    </>
  );
};
