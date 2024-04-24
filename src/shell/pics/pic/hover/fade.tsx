import type { FC } from "react";
import { motion } from "framer-motion";
import { FadeV } from "@brysonandrew/fade-edge";
import { FADE_PRESENCE } from "~/constants/animation";

export const PicHoverFade: FC =
  () => {
    return (
      <motion.div
        {...FADE_PRESENCE}
      >
        <FadeV
          key="ImageFadeV"
          isFixed={false}
          direction="to top left"
          darkEdgeColor="var(--dark-04)"
          midColor="var(--gray-01)"
          lightEdgeColor="var(--light-02)"
        />
      </motion.div>
    );
  };
