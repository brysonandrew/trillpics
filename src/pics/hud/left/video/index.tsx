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
import { HudLeftAddRandom } from "~/pics/hud/left/add-random";
import { LeftButtonsClear } from "~/pics/hud/left/clear";
import { VideoPicsCounter } from "~/shell/screen/video-pic-counter";
import { useVideoPicsCheck } from "~/hooks/pic/video/read/video-pics-check/hook";
import { PicsHudLeftLine } from "~/pics/hud/left/line";
import { boxSize } from "~/constants/box/size";

type TProps = {
  isLabel: boolean;
};
export const HudLeftVideo: FC<
  TProps
> = ({ isLabel }) => {
  const isVideoPics =
    useVideoPicsCheck();
  const { togglePathValue, isActive } =
    useNavigationControls(VIDEO_ROUTE);
  const handleClick = () => {
    togglePathValue(
      isActive
        ? HOME_ROUTE
        : VIDEO_ROUTE
    );
  };
  const s = boxSize();
  const title = isActive
    ? "Exit Video Maker"
    : "Video Maker";

  return (
    <>
      {isActive && isVideoPics && (
        <>
          <LeftButtonsClear
            isLabel={isLabel}
          />
          <PicsHudLeftLine />
          <motion.div
            layout
            className="center"
            style={{ width: s.m }}
          >
            <VideoPicsCounter />
          </motion.div>
          <PicsHudLeftLine />
        </>
      )}
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
          !isActive &&
          isVideoPics && (
            <VideoPicCounterFloating />
          )
        }
      >
        {title}
      </PillBHover>
      {isActive && (
        <>
          <PicsHudLeftLine />
          <HudLeftAddRandom
            isLabel={isLabel}
          />
        </>
      )}
    </>
  );
};
