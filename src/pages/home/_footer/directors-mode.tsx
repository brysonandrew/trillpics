import { FC } from "react";
import { motion } from "framer-motion";
import { useNavigationControls } from "~/hooks/use-navigation/controls";
import { DIRECTORS_MODE_PATH_VALUE } from "~/constants/params";
import { IconsVideo } from "~/components/icons/video/video";
import { VideoPicCounterFloating } from "~/shell/screen/video-pic-counter/floating";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { useHoverKey } from "~/hooks/use-hover-key";
import { PRESENCE_OPACITY, PRESENCE_OPACITY_DELAY } from "@brysonandrew/motion-config-constants";
import { VideoFooterControls } from "~/pages/video/_common/footer/controls";
import { PillBStill } from "~/components/buttons/pill/b/still";
import { NOOP } from "@brysonandrew/utils-function";
import { SeperatorVertical } from "~/pages/video/_common/footer/controls/seperator/vertical";

export const HomeFooterVideo: FC =
  () => {
    const { isHover, motionHandlers } =
      useHoverKey();
    const { togglePathValue } =
      useNavigationControls();
    const handleClick = () => {
      togglePathValue(
        DIRECTORS_MODE_PATH_VALUE
      );
    };
    const title = "Director's Mode";
    const isHovering = isHover(title);
    const VideoFooterControlsHoverKey =
      "VideoFooterControlsHoverKey";
    const isVideoFooterControlsHover =
      isHover(
        VideoFooterControlsHoverKey
      );
    return (
      <motion.div className="relative row-reverse">
        <PillBHover
          key={title}
          title={title}
          onClick={
            isVideoFooterControlsHover
              ? NOOP
              : handleClick
          }
          Icon={IconsVideo}
          outerCircle={
            <>
              {isHovering ? (
                <>
                  <VideoFooterControls
                    Button={PillBStill}
                    Seperator={
                      SeperatorVertical
                    }
                    // {...PRESENCE_OPACITY_DELAY}
                    {...motionHandlers(
                      VideoFooterControlsHoverKey
                    )}
                  />
                </>
              ) : (
                <VideoPicCounterFloating />
              )}
            </>
          }
        >
          {title}
          <SeperatorVertical />

        </PillBHover>
      </motion.div>
    );
  };
