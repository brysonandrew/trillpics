import type { FC } from "react";
import { motion } from "framer-motion";
import { TRANSITION } from "@brysonandrew/motion-config-constants";
import { IconsPlus } from "~/components/icons/plus";

type TProps = { isAdded: boolean };
export const AddRemoveIcon: FC<
  TProps
> = ({ isAdded }) => {
  const rotate = isAdded ? -45 : 0;
  return (
    <motion.h4
      className="relative origin-center grayscale-100 brightness-50"
      initial={{
        opacity: 0,
        scale: 0,
        rotate,
      }}
      animate={{
        opacity: 1,
        scale:4,
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
      <IconsPlus
        strokeWidth={0.4}
        style={{
          transform: "scale(1.2)",
        }}
      />
    </motion.h4>
  );
};
