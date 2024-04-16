import { FC, Fragment } from "react";
import { motion } from "framer-motion";
import { Background04 } from "@/components/decoration/background-04";
import { AddRemoveToVideoMarker } from "@/components/pic/video-mode-counter/add-remove-to-video-marker";
import {
  PRESENCE_OPACITY,
  PRESENCE_OPACITY_ANIMATE_DELAY_04,
} from "@brysonandrew/animation";
import { IconsVideo } from "@/components/icons/video";
import {
  FADE_PRESENCE,
  FADE_PRESENCE_05,
  FADE_PRESENCE_05_DELAY_04,
  FADE_PRESENCE_DELAY_04,
} from "@/constants/animation";
import { BPill } from "@/components/interactive/b-pill";

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
    <>
      {(isAdded || isHover) && (
        <motion.div
          key="VideoModeCounter"
          className="flex flex-row items-center gap-2 h-12 px-2"
          {...FADE_PRESENCE}
        >
          {isAdded && (
            <BPill
              title="Remove from video"
              Icon={IconsVideo}
              layout
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
      {/* {(isAdded || isHover) && (
        <motion.div
          key="VideoModeCounter"
          className="flex flex-row items-center gap-2 h-12 px-2"
          {...FADE_PRESENCE}
        >
          <>
            {isAdded && (
              <>
                <motion.div
                  layout
                  style={{
                    borderRadius: 40,
                  }}
                  className="fill overflow-hidden"
                >
                  <div className="absolute inset-0 dark:bg-black bg-gray-6 opacity-50 rounded-full" />
                  {`#${videoOrder + 1}`}
                </motion.div>
                <motion.h4
                  layout
                  className="relative px-2 font-mono text-white dark:text-gray-5"
                >
                  <motion.div
                    className="relative flex gap-2 items-center text-xl"
                    {...(isHover
                      ? {}
                      : FADE_PRESENCE_DELAY_04)}
                  >
                    <IconsVideo />
                    {`#${videoOrder + 1}`}
                  </motion.div>
                </motion.h4>
              </>
            )}
          </>
          {isHover && (
            <AddRemoveToVideoMarker
              isAdded={isAdded}
            />
          )}
        </motion.div>
      )} */}
    </>
  );
};
