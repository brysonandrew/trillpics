import { FC } from "react";
import { motion } from "framer-motion";
import { useNavigationControls } from "~/hooks/navigation/controls";
import { IconsVideo } from "~/components/icons/video/video";
import { VideoPicCounterFloating } from "~/shell/screen/video-pic-counter/floating";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { useHoverKey } from "~/hooks/use-hover-key";
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
    const title = "Create Video";
    const isHovering = isHover(title);

    return (
      <motion.div
        layoutId="VideoButton"
        className="relative"
      >
        <PillBHover
          title={title}
          onClick={handleClick}
          Icon={IconsVideo}
          outerCircle={
            <VideoPicCounterFloating />
          }
        >
          {isHovering && title}
        </PillBHover>
      </motion.div>
    );
  };
