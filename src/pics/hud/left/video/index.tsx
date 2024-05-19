import { FC } from "react";
import { motion } from "framer-motion";
import { useNavigationControls } from "~/hooks/navigation/controls";
import { IconsVideo } from "~/components/icons/video/video";
import { VideoPicCounterFloating } from "~/shell/screen/video-pic-counter/floating";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import {
  HOME_ROUTE,
  VIDEO_ROUTE,
} from "~/constants/params";

type TProps = {
  isLabel: boolean;
  children(
    isActive: boolean
  ): JSX.Element | null;
};
export const HudLeftVideo: FC<
  TProps
> = ({ isLabel, children }) => {
  const { togglePathValue, isActive } =
    useNavigationControls(VIDEO_ROUTE);
  const handleClick = () => {
    togglePathValue(
      isActive
        ? HOME_ROUTE
        : VIDEO_ROUTE
    );
  };
  const title = isActive
    ? "Exit Video Maker"
    : "Video Maker";

  return (
    <>
      {children(isActive)}
      <motion.div
        layoutId="VideoButton"
        className="relative"
      >
        <PillBHover
          title={title}
          subtitle={
            isActive
              ? ""
              : "Make a short video clip composed of the pics you see here."
          }
          onClick={handleClick}
          isLabel={isLabel}
          Icon={IconsVideo}
          outerCircle={
            !isActive && (
              <VideoPicCounterFloating />
            )
          }
        >
          {title}
        </PillBHover>
      </motion.div>
    </>
  );
};
