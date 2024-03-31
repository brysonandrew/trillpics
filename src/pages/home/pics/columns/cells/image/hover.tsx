import type { FC } from "react";
import { motion } from "framer-motion";
import { TRANSITION } from "@brysonandrew/animation";
import { TEXT_GRADIENT } from "@constants/css/gradient";

type TProps = { isAdded: boolean };
export const AddRemoveToVideoMarker: FC<
  TProps
> = ({ isAdded }) => {
  const rotate = isAdded ? 45 : 0;
  return (
      <motion.h4
        className="relative text-6xl font-mono text-main-inverted origin-center"
        style={TEXT_GRADIENT}
        layout
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
          duration:0.28
        }}
      >
        +
   
      </motion.h4>
  );
};
