import type { FC } from "react";
import { motion } from "framer-motion";
import { TitleText } from "~/shell/header/left/title/text";
import { SparkleButton } from "~/shell/header/left/title/sparkle-button";
import { SvgWrap } from "@brysonandrew/svg-dimensionless";
import { resolveUrlId } from "@brysonandrew/utils-attributes";

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
        <SvgWrap
          style={{
            width: 0,
            height: 0,
          }}
        >
          <filter id="fat">
            <feMorphology
              operator="dilate"
              //in="t"
              in="SourceGraphic"
              radius={0.8}
              result="m"
            />
          </filter>
        </SvgWrap>
        <motion.span
          className="fill text-gray-9"
          style={{
            filter: resolveUrlId("fat"),
          }}
        >
          AI Art Gallery
        </motion.span>
        <span
          className="relative text-black"
        >
          AI Art Gallery
        </span>
      </h2>
    </div>
  );
};
