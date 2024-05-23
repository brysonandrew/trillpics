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
  const s = boxSize();

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

  const title = isActive
    ? "Exit Video Maker"
    : "Video Maker";

  return (
    <>
      {isActive && isVideoPics && (
        <motion.div
          layout
          className="column-start shrink-0 justify-evenly w-0"
          style={{
            height: s.m4,
          }}
        >
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
          {isActive && (
            <>
              <HudLeftAddRandom
                isLabel={isLabel}
              />
              <PicsHudLeftLine />
            </>
          )}
        </motion.div>
      )}

      <PillBHover
        title={title}
        subtitle={
          isActive
            ? ""
            : "Make a short video clip composed of the pics you see here."
        }
        onClick={handleClick}
        isSelected={isActive}
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
    </>
  );
};
