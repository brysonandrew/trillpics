import type { FC } from "react";
import { motion } from "framer-motion";
import { DELAY_04_TRANSITION_PROPS, DELAY_TRANSITION_PROPS } from "~/constants/animation";
import { boxRadius } from "~/constants/box/radius";

export const PicCursorSquare: FC =
  () => {
    const borderRadus = boxRadius();
    return (
      <motion.div
        className="center absolute left-1/6 top-1/6 w-2/3 h-2/3 border border-white dark:border-black opacity-60"
        style={{
          borderRadius: borderRadus,
        }}
        initial={{
          opacity: 0.4,
          scale: 0.8,
        }}
        animate={{
          scale: 0.7,
          opacity: 0.8,
        }}
        exit={{
          scale: 0.8,
          opacity: 0.4,
        }}
        {...DELAY_TRANSITION_PROPS}
      />
    );
  };
