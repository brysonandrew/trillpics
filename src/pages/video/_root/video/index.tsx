import {
  FC,
  PropsWithChildren,
} from "react";
import { motion } from "framer-motion";
import { useNavigationControls } from "~/hooks/navigation/controls";
import { IconsVideo } from "~/components/icons/video/video";
import { VideoPicCounterFloating } from "~/pages/video/_root/video/pic-counter/floating";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import {
  HOME_ROUTE,
  VIDEO_ROUTE,
} from "~/constants/params";
import { useVideoPicsCheck } from "~/hooks/pic/video/read/video-pics-check/hook";
import { boxSize } from "~uno/rules/box/size";
import { useReadyContext } from "~/shell/ready/context";
import { IconsHome } from "~/components/icons/home";
import { useDraggerReset } from "~/pages/video/_root/reorder/use-dragger-reset";

export const HudLeftVideo: FC<
  PropsWithChildren
> = ({ children }) => {
  const s = boxSize();
  const { main, screen } = useReadyContext();
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
  useDraggerReset({
    toY: isActive ? -(s.m4 + s.m) : 0,
    main,
  });
  const title = isActive
    ? "Exit video sequencer"
    : "Video sequencer";
  return (
      <motion.div
        className="absolute bottom-0 w-full"
        style={{
          left: screen.container.left,
          bottom: s.m3,
          y: main.dragger.y,
          x: main.dragger.x05,
        }}
      >
        <PillBHover
          title={title}
          subtitle={
            isActive
              ? ""
              : "Turn a sequence of pics into video."
          }
          onClick={handleClick}
          isSelected={isActive}
          Icon={
            isActive
              ? IconsHome
              : IconsVideo
          }
          outerCircle={
            !isActive &&
            isVideoPics && (
              <VideoPicCounterFloating />
            )
          }
        >
          {title}
        </PillBHover>
        {isActive ? children : null}
      </motion.div>
  );
};
