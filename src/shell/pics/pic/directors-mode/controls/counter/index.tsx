import { FC } from "react";
import {
  AnimatePresence,
  motion,
  MotionConfig,
} from "framer-motion";
import { IconsVideo } from "~/components/icons/video/video";
import { PillB } from "~/components/buttons/pill/b";
import { AddRemoveToVideoMarker } from "~/shell/pics/pic/directors-mode/controls/counter/add-remove-to-video-marker";
import { TUsePicDirectorsModeControls } from "~/shell/pics/pic/directors-mode/controls/use-pic-directors-mode";
import { TUseBoxChildProps } from "~/shell/pics/pic/box/use-box";

export type TDirectorsModeControlsCounterProps =
  TUsePicDirectorsModeControls &
    Pick<TUseBoxChildProps, "isHovering">;
export const DirectorsModeControlsCounter: FC<
  TDirectorsModeControlsCounterProps
> = ({
  isAdded,
  isHovering,
  videoOrder,
  isControls,
}) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.2,
        delay: 0.6,
      }}
    >
      <AnimatePresence>
        {(isAdded || isHovering) && (
          <motion.div
            key="DirectorsModeControlsCounter"
            className="flex flex-row items-center gap-2 h-12 px-2"
          >
            {isAdded && (
              <PillB
                title="Remove from video"
                Icon={IconsVideo}
                isFlat
              >
                <motion.span
                  layout
                >{`#${
                  videoOrder + 1
                }`}</motion.span>
              </PillB>
            )}
            {isHovering  && isControls && (
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
