import type { FC } from "react";
import { motion } from "framer-motion";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { TDivMotionProps } from "@brysonandrew/config-types";

export const OverlayCenter: FC<TDivMotionProps> = ({children, ...props}) => {
  return (
    <motion.div
      key="isDownloadComplete"
      className="fill center"
      {...PRESENCE_OPACITY}
      transition={{
        duration: 1,
        ease: "linear",
      }}
      {...props}
    >
       {children}
    </motion.div>
  );
};
