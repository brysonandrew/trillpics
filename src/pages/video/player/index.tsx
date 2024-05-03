import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { GradientsZebraBackground } from "~/components/gradients/zebra/background";
import { useOutletContext } from "react-router";
import { TOutletContext } from "~/shell";
import { PlayerFooter } from "~/pages/video/player/_footer";
import { RemotionPlayer } from "~/components/remotion/player";
import { PlayerFooterButtonsExit } from "~/pages/video/player/_footer/exit";
import { PlayerFooterButtonsFullscreen } from "~/pages/video/player/_footer/fullscreen";
import { useVideoPlayerAmbient } from "~/pages/video/player/_ambient";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { PlayerHeader } from "~/pages/video/player/_header";

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
        {/* <RemotionPlayer /> */}
      </Screen>
      <Header>
        <PlayerHeader
          isPlayerInstance={
            isPlayerInstance
          }
        />
      </Header>
      <Footer>
        <>
          <div className="absolute left-0 bottom-0 row-space w-full">
            <PlayerFooterButtonsExit />
            {isPlayerInstance && (
              <PlayerFooterButtonsFullscreen />
            )}
          </div>
        </>
        <PlayerFooter />
      </Footer>
    </>
  );
};
