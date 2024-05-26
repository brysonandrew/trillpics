import type { FC } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { Download } from "~/pages/video/player/_header/download";
import { PlayerPlayback } from "~/components/remotion/player/playback";
import { GradientsZebraBackground } from "~/components/gradients/zebra/background";
import { LoadingOverlay } from "~/components/remotion/player/overlays/loading/overlay";
import { TUseVideoPlayerAmbientResult } from "~/pages/video/player/_ambient";

export const PlayerHeader: FC<
  Pick<
    TUseVideoPlayerAmbientResult,
    "isPlayerInstance"
  >
> = ({ isPlayerInstance }) => {
  return (
    <AnimatePresence>
      {isPlayerInstance ? (
        <motion.div>
          <PlayerPlayback />
          <Download />
        </motion.div>
      ) : (
        <motion.div>
          <GradientsZebraBackground>
            <LoadingOverlay>
              <div>loading player</div>
            </LoadingOverlay>
          </GradientsZebraBackground>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
