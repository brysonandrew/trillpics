import type { FC } from "react";
import { motion } from "framer-motion";
import { TitleText } from "~/shell/header/left/title/text";
import { SparkleButton } from "~/shell/header/left/title/sparkle-button";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import {
  FILTERS_FAT_SVG_ID,
  FILTERS_FAT_SVG_PROPS,
} from "~/shell/global/svg/filters/fat";

export const Title: FC = () => {
  return (
    <div className="relative gap-0 md:(gap-4 w-auto)">
      <div className="row items-center gap-4">
        <TitleText />
        <SparkleButton />
      </div>
      <h2
        style={{
          mixBlendMode: "difference",
          backgroundClip: "text",
        }}
        className="relative text-lg text-black char-gap-8"
      >
        <motion.span
          className="fill text-gray-9"
          style={{
            ...FILTERS_FAT_SVG_PROPS,
          }}
        >
          AI Art Gallery
        </motion.span>
        <span className="relative text-black">
          AI Art Gallery
        </span>
      </h2>
    </div>
  );
};
