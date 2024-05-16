import { FC } from "react";
import { motion } from "framer-motion";
import { useNavigationControls } from "~/hooks/navigation/controls";
import { IconsVideo } from "~/components/icons/video/video";
import { VideoPicCounterFloating } from "~/shell/screen/video-pic-counter/floating";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { useHoverKey } from "~/hooks/use-hover-key";
import { VideoFooterLeft } from "~/pages/video/_common/footer/left";
import { PillBStill } from "~/components/buttons/pill/b/still";
import { NOOP } from "@brysonandrew/utils-function";
import { SeperatorVertical } from "~/pages/video/_common/footer/left/seperator/vertical";
import { VIDEO_ROUTE } from "~/constants/params";
import { TexturesMesh } from "~/components/textures/mesh";

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
        className="relative row-reverse"
      >
        <PillBHover
          key={title}
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
