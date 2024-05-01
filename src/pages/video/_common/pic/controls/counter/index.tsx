import { FC } from "react";
import {
  AnimatePresence,
  motion,
  MotionConfig,
} from "framer-motion";
import { IconsVideo } from "~/components/icons/video/video";
import { PillB } from "~/components/buttons/pill/b";
import { AddRemoveToVideoMarker } from "~/pages/video/_common/pic/controls/counter/add-remove-to-video-marker";
import { useTrillPicsStore } from "~/store";
import { TPicProps } from "~/shell/pics/pic";

export const VideoControlsCounter: FC<
  TPicProps
> = (props) => {
  const { videoPics, isControls } =
    useTrillPicsStore(
      ({ videoPics, isControls }) => ({
        videoPics,
        isControls,
      })
    );
  const videoOrder = videoPics.indexOf(
    props.name
  );
  const isAdded = videoOrder > -1;

  return (
    <MotionConfig
      transition={{
        duration: 0.2,
        delay: 0.6,
      }}
    >
      <AnimatePresence>
        {isAdded && (
          <motion.div
            key="VideoControlsCounter"
            className="row gap-2 h-12 px-2"
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
            {isControls && (
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
