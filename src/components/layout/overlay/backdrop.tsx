import type { FC } from "react";
import { motion } from "framer-motion";

export const LayoutOverlayBackdrop: FC = () => {
  return (
    <motion.div
      className="fill bg-gray dark:bg-gray rounded-lg z-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      exit={{ opacity: 0 }}
    />
  );
};
