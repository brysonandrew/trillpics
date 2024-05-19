import { FC, memo } from "react";
import { motion } from "framer-motion";
import { APP_TITLE } from "~app/base/package";

export const TitleText: FC = memo(
  () => {
    return (
      <motion.h1
        style={{
          overflowWrap: "break-word",
        }}
        className="relative z-10 font-title opacity-100 text-left text-3xl sm:text-3.5xl md:text-4xl"
      >
        <span
          className="relative uppercase whitespace-nowrap font-sans _outline-filter"
        >
          {APP_TITLE}
        </span>
      </motion.h1>
    );
  }
);
