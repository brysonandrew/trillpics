import { FC } from "react";
import {
  AnimatePresence,
  motion,
  MotionConfig,
} from "framer-motion";
import { IconsVideo } from "~/components/icons/video/video";
import { PillB } from "~/components/buttons/pill/b";
import { AddRemoveToVideoMarker } from "~/shell/pics/pic/directors-mode/counter/add-remove-to-video-marker";
import { TUsePicDirectorsMode } from "~/shell/pics/pic/directors-mode/use-pic-directors-mode";
import { TUseBox } from "~/shell/pics/pic/box";

export type TDirectorsModeCounterProps =
  TUsePicDirectorsMode &
    Pick<TUseBox, "isHover">;
export const DirectorsModeCounter: FC<
  TDirectorsModeCounterProps
> = ({
  isAdded,
  isHover,
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
        {(isAdded || isHover) && (
          <motion.div
            key="DirectorsModeCounter"
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
            {isHover && isControls && (
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
