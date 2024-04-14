import type { FC } from "react";
import { motion } from "framer-motion";
import { TRANSITION } from "@brysonandrew/animation";

type TProps = { isAdded: boolean };
export const AddRemoveToVideoMarker: FC<
  TProps
> = ({ isAdded }) => {
  const rotate = isAdded ? 45 : 0;
  return (
    <motion.h4
      className="relative text-6xl font-mono text-main-inverted origin-center dark:text-black-08 text-white-09 _gradient-text"
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: isAdded ? 0.8 : 1.4,
        rotate,
      }}
      transition={{
        ...TRANSITION,
        duration: 0.2,
      }}
      layout
    >
      +
    </motion.h4>
  );
};
