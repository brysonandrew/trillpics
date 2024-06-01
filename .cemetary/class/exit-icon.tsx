import type { FC } from "react";
import { AnimatePresence } from "framer-motion";
import { IconsPicZoomOut } from "~/components/icons/pic/zoom-out";
import { useTrillPicsStore } from "~/store/middleware";
import { Floating } from "~/pics/grid/pic/floating";

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
          <Floating position="fixed" key="floating">
            <IconsPicZoomOut />
          </Floating>
          // <motion.div
          //   key="IconsPicZoomOut"
          //   className="fixed top-4 left-6"
          //   style={{
          //     zIndex: FULLSCREEN_Z,
          //   }}
          //   {...PRESENCE_OPACITY}
          // >
          //   <IconsPicZoomOut />
          // </motion.div>
        )}
      </AnimatePresence>
    );
  };
