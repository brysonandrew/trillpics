import type { FC } from "react";
import { motion } from "framer-motion";
import { TRANSITION } from "@brysonandrew/motion-core";
import { IconsCross24 } from "~/components/icons/cross/24";

type TProps = { isAdded: boolean };
export const AddRemoveToVideoMarker: FC<
  TProps
> = ({ isAdded }) => {
  const rotate = isAdded ? 0 : 45;
  return (
    <motion.h4
      className="relative origin-center"
      initial={{
        opacity: 0,
        scale: 0,
        rotate: 45,
      }}
      animate={{
        opacity: 1,
        scale: isAdded ? 1.2 : 2.4,
        rotate,
        transition: {
          ...TRANSITION,
          duration: 0.2,
          delay: isAdded ? 0.6 : 0,
        },
      }}
      transition={{
        ...TRANSITION,
        duration: 0.2,
        ease: "easeOut",
      }}
      layout
    >
      <IconsCross24 />
    </motion.h4>
  );
};
