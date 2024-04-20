import { FC } from "react";
import {
  AnimatePresence,
  motion,
  MotionConfig,
} from "framer-motion";
import { AddRemoveToVideoMarker } from "~/components/pic/video-mode-counter/add-remove-to-video-marker";
import { IconsVideo } from "~/components/icons/video/video";
import { PillB } from "~/components/buttons/pill/b";

type TProps = {
  isAdded: boolean;
  isHover: boolean;
  videoOrder: number;
};
export const VideoModeCounter: FC<
  TProps
> = ({
  isAdded,
  isHover,
  videoOrder,
}) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.2,
        delay: 0.6,
      }}
    >
      <AnimatePresence>
        {(isAdded || isHover) && (
          <motion.div
            key="VideoModeCounter"
            className="flex flex-row items-center gap-2 h-12 px-2"
          >
            {isAdded && (
              <PillB
                title="Remove from video"
                Icon={IconsVideo}
                isFlat
              >
                <motion.span layout>{`#${
                  videoOrder + 1
                }`}</motion.span>
              </PillB>
            )}
            {isHover && (
              <AddRemoveToVideoMarker
                isAdded={isAdded}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
};
