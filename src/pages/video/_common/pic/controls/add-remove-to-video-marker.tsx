import type { FC } from "react";
import { motion } from "framer-motion";
import { IconsCross24 } from "~/components/icons/cross/24";
import { TRANSITION } from "@brysonandrew/motion-config-constants";

type TProps = { isAdded: boolean };
export const AddRemoveToVideoMarker: FC<
  TProps
> = ({ isAdded }) => {
  const rotate = isAdded ? 0 : 45;
  return (
    <motion.h4
      className="absolute origin-center"
      style={{ top: '3rem', right: '3rem' }}
      initial={{
        opacity: 0,
        scale: 0,
        rotate: 45,
      }}
      animate={{
        opacity: 1,
        scale: isAdded ? 1.6 : 1.7,
        rotate,
        transition: {
          ...TRANSITION,
          duration: 0.2,
          // delay: isAdded ? 0.2 : 0,
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
