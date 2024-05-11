import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { GradientsZebraBackground } from "~/components/gradients/zebra/background";
import { useOutletContext } from "react-router";
import { TOutletContext } from "~/shell";
import { PlayerFooter } from "~/pages/video/player/_footer";
import { PlayerFooterButtonsExit } from "~/pages/video/player/_footer/exit";
import { PlayerFooterButtonsFullscreen } from "~/pages/video/player/_footer/fullscreen";
import { useVideoPlayerAmbient } from "~/pages/video/player/_ambient";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { PlayerHeader } from "~/pages/video/player/_header";
import { PicBackdrop } from "~/pics/grid/pic/backdrop";
import { GRADIENT_MESH_DARK } from "~app/color/gradient/mesh";
import { RemotionPlayer } from "~/components/remotion/player";

export const VideoPlayer = () => {
  const { Header, Footer, Screen } =
    useOutletContext<TOutletContext>();
  const {
    isPlayerInstance,
    isPlaying,
  } = useVideoPlayerAmbient();
  return (
    <>
      <PicBackdrop/>
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
