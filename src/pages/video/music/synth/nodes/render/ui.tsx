import type { FC } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { TGraphLayoutKey } from "~/pages/video/music/synth/nodes/types";
import { box } from "~uno/rules/box";
import { useMusicRefs } from "~/pages/video/music/_context/refs";

export const renderUi = (
  key: TGraphLayoutKey,
  Icon: FC,
  ui?: JSX.Element
) => {
  const { layout } = useMusicRefs();
  return (
    <>
      {layout.graph[key]?.current &&
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
          layout.graph[key].current
        )}
    </>
  );
};
