import type { FC } from "react";
import { motion } from "framer-motion";
import { Background04 } from "@/components/decoration/background-04";
import { VideoIcon } from "@/pages/home/footer/video/icon";
import { AddRemoveToVideoMarker } from "@/pages/home/pics/columns/cells/image/hover";
import { PRESENCE_OPACITY_ANIMATE_DELAY_04 } from "@brysonandrew/animation";

type TProps = {
  isAdded: boolean;
  isHover: boolean;
  videoOrder: number;
};
export const VideoModeCounter: FC<
  TProps
> = ({ isAdded, isHover, videoOrder }) => {
  if (!isAdded && !isHover) return null;
  return (
    <div className="absolute left-1/2 top-1/2 -translate-1/2 flex flex-row items-center gap-2 h-14 px-2">
      {isAdded && (
        <>
          <motion.div
            className="fill"
            layout
          >
            <Background04 classValue="fade-in-animation rounded-full" />
          </motion.div>
          <h4 className="relative px-2 font-mono text-white dark:text-gray-5">
            <motion.div
              className="relative flex gap-2 items-center text-xl"
              layout
              {...(isHover
                ? {}
                : PRESENCE_OPACITY_ANIMATE_DELAY_04)}
            >
              <VideoIcon />#
              {videoOrder + 1}
            </motion.div>
          </h4>
        </>
      )}
      {isHover && (
        <AddRemoveToVideoMarker
          isAdded={isAdded}
        />
      )}
    </div>
  );
};
