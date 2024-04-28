import type { FC } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { IconsPicZoomOut } from "~/components/icons/pic/zoom-out";
import { FULLSCREEN_Z } from "~/constants/dom";
import { useTrillPicsStore } from "~/store";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";

export const PicZoomedExitIcon: FC =
  () => {
    const { isOnscreen } =
      useTrillPicsStore(
        ({ isOnscreen }) => ({
          isOnscreen,
        })
      );
    return (
      <AnimatePresence>
        {isOnscreen && (
          <motion.div
            key="IconsPicZoomOut"
            className="fixed top-4 left-6"
            style={{
              zIndex: FULLSCREEN_Z,
            }}
            {...PRESENCE_OPACITY}
          >
            <IconsPicZoomOut />
          </motion.div>
        )}
      </AnimatePresence>
    );
  };
