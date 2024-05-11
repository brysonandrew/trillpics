import { FC } from "react";
import { motion } from "framer-motion";
import { useNavigationControls } from "~/hooks/use-navigation/controls";
import { IconsVideo } from "~/components/icons/video/video";
import { VideoPicCounterFloating } from "~/shell/screen/video-pic-counter/floating";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { useHoverKey } from "~/hooks/use-hover-key";
import { VideoFooterControls } from "~/pages/video/_common/footer/controls";
import { PillBStill } from "~/components/buttons/pill/b/still";
import { NOOP } from "@brysonandrew/utils-function";
import { SeperatorVertical } from "~/pages/video/_common/footer/controls/seperator/vertical";
import { VIDEO_ROUTE } from "~/constants/params";

export const HomeFooterVideo: FC =
  () => {
    const { isHover, motionHandlers } =
      useHoverKey();
    const { togglePathValue } =
      useNavigationControls();
    const handleClick = () => {
      togglePathValue(VIDEO_ROUTE);
    };
    const title = "Video mode";
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
                <VideoFooterControls
                  Button={PillBStill}
                  Seperator={
                    SeperatorVertical
                  }
                  {...motionHandlers(
                    VideoFooterControlsHoverKey
                  )}
                />
              ) : (
                <VideoPicCounterFloating />
              )}
            </>
          }
        >
          <div className="px-1">
            {title}
          </div>
          <SeperatorVertical />
        </PillBHover>
      </motion.div>
    );
  };
