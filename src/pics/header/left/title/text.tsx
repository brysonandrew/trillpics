import { FC, memo } from "react";
import { motion } from "framer-motion";
import { APP_TITLE } from "~app/index";

export const TitleText: FC = memo(
  () => {
    return (
      <motion.h1
        style={{
          overflowWrap: "break-word",
        }}
        className="relative z-10 font-title opacity-100 text-left text-3xl sm:text-3.5xl md:text-4xl"
      >
        <span className="relative dark:text-black text-white-8 uppercase whitespace-nowrap font-sans _sf-outline _bi-text">
          {APP_TITLE}
        </span>
      </motion.h1>
    );
  }
);
