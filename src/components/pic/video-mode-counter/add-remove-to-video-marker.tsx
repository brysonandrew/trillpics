import type { FC } from "react";
import { motion } from "framer-motion";
import { TRANSITION } from "@brysonandrew/animation";
import { IconsCross } from "@/components/icons/cross";

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
        rotate: 45
      }}
      animate={{
        opacity: 1,
        scale: isAdded ? 1 : 2.8,
        rotate,
      }}
      transition={{
        ...TRANSITION,
        duration: 0.2,
      }}
      layout
    >
      <IconsCross />
    </motion.h4>
  );
};
