import { FC, memo } from "react";
import { motion } from "framer-motion";
import { APP_TITLE } from "~app/base/package";
import { TitleShadows } from "~/pics/header/left/title/shadows";

export const TitleText: FC = memo(
  () => {
    return (
      <motion.h1
        style={{
          overflowWrap: "break-word",
        }}
        className="relative z-10 font-display opacity-100 text-white dark:text-black-2 text-left w-30 text-4xl sm:(text-4.5xl w-32) md:(text-4.5xl w-auto)"
      >
        <TitleShadows />
        <span className="relative">
          {APP_TITLE}
        </span>
      </motion.h1>
    );
  }
);
