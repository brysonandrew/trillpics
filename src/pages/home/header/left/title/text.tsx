import type { FC } from "react";
import { motion } from "framer-motion";
import { APP_TITLE } from "~app/base";

export const TitleText: FC = () => {
  return (
    <motion.h1
      style={{
        opacity: 0.7,
        overflowWrap: "break-word",
      }}
      whileHover={{ opacity: 0.9 }}
      className="relative font-display text-main-inverted text-left w-32 text-4xl sm:(text-4.5xl w-44) md:(text-5xl w-auto)"
    >
      {APP_TITLE}
    </motion.h1>
  );
};
