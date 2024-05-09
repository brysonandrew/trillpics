import type { FC } from "react";
import { motion } from "framer-motion";
import { FADE_PRESENCE } from "~/constants/animation";
import { VideoControlsCounter } from "~/pages/video/_common/pic/controls/counter";
import { TPicProps } from "~/pics/grid/pic";

export type TPicVideoControlsProps =
  TPicProps;
export const PicVideoControls: FC<
  TPicVideoControlsProps
> = (props) => {
  return (
    <motion.div
      key="video mode counter"
      className="fill"
      {...FADE_PRESENCE}
    >
      <VideoControlsCounter
        {...props}
      />
    </motion.div>
  );
};
