import type { FC } from "react";
import { motion } from "framer-motion";
import { IconsCross24 } from "~/components/icons/cross/24";
import { TRANSITION } from "@brysonandrew/motion-config-constants";

type TProps = { isAdded: boolean };
export const AddRemoveIcon: FC<
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
        scale: isAdded ? 1.6 : 1.6,
        rotate,
        transition: {
          ...TRANSITION,
          duration: 0.2,
        },
      }}
      transition={{
        ...TRANSITION,
        duration: 0.2,
        ease: "easeOut",
      }}
      layout
    >
      <IconsCross24
        classValue="fill"
        strokeWidth={0.4}
        style={{
          transform: "scale(1.2)",
        }}
      />
      <IconsCross24
        classValue="relative"
        fill="black"
        stroke="white"
        className="opacity-50"
        strokeWidth={0.4}
      />
    </motion.h4>
  );
};
