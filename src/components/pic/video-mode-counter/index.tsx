import { FC } from "react";
import {
  AnimatePresence,
  motion,
  MotionConfig,
} from "framer-motion";
import { AddRemoveToVideoMarker } from "@/components/pic/video-mode-counter/add-remove-to-video-marker";
import { IconsVideo } from "@/components/icons/video";
import { FADE_PRESENCE } from "@/constants/animation";
import { BPill } from "@/components/interactive/b-pill";
import { Background1 } from "@/components/decoration/background-1";
import { Metal } from "@/components/metal";
import { PRESENCE_OPACITY_DURATION_DELAY } from "@brysonandrew/animation";

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
              <BPill
                title="Remove from video"
                Icon={IconsVideo}
                isFlat
              >
                <span className="font-mono">{`#${
                  videoOrder + 1
                }`}</span>
              </BPill>
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
