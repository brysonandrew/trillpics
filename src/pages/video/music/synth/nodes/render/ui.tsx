import type { FC } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { TSourceProps } from "~/pages/video/music/synth/nodes/types";
import { box } from "~uno/rules/box";

export const renderUi = (
  config: TSourceProps,
  Icon: FC,
  ui?: JSX.Element,

) => {
  return (
    <>
      {config.containerRef.current &&
        createPortal(
          <motion.div
            className="relative"
            layout
          >
            <motion.div
              className="absolute center right-full"
              style={{
                width: box.m2,
                top: box.m0125,
              }}
            >
              <Icon />
            </motion.div>
            {ui}
          </motion.div>,
          config.containerRef.current
        )}
    </>
  );
};
