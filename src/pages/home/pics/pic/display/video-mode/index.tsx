import type { FC } from "react";
import { motion } from "framer-motion";
import { FADE_PRESENCE } from "~/constants/animation";
import { TUsePic } from "~/pages/home/pics/pic/use-pic";
import { VideoModeCounter } from "~/pages/home/pics/pic/display/video-mode/counter";

export type TPicDisplayVideoModeProps = Pick<
  TUsePic,
  "isAdded" | "isHover" | "videoOrder"
>;
export const PicDisplayVideoMode: FC<
TPicDisplayVideoModeProps
> = ({
  isAdded,
  isHover,
  videoOrder,
}) => {
  return (
    <motion.div
      key="video mode counter"
      className="absolute left-1/2 top-1/2 -translate-1/2"
      {...FADE_PRESENCE}
    >
      <VideoModeCounter
        isAdded={isAdded}
        isHover={isHover}
        videoOrder={videoOrder}
      />
    </motion.div>
  );
};
