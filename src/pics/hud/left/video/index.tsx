import {
  FC,
  PropsWithChildren,
} from "react";
import { motion } from "framer-motion";
import { useNavigationControls } from "~/hooks/navigation/controls";
import { IconsVideo } from "~/components/icons/video/video";
import { VideoPicCounterFloating } from "~/pics/hud/left/video/pic-counter/floating";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import {
  HOME_ROUTE,
  VIDEO_ROUTE,
} from "~/constants/params";
import { useVideoPicsCheck } from "~/hooks/pic/video/read/video-pics-check/hook";
import { boxSize } from "~uno/rules/box/size";
import { useContextReady } from "~/shell/ready/context";
import { TChildren } from "@brysonandrew/config-types";
import { IconsHome } from "~/components/icons/home";
import { useDraggerReset } from "~/pages/video/_root/reorder/use-dragger-reset";

type TProps = {
  siblings: TChildren;
  inActiveSiblings: TChildren;
};
export const HudLeftVideo: FC<
  PropsWithChildren<TProps>
> = ({
  children,
  siblings,
  inActiveSiblings,
}) => {
  const s = boxSize();
  const {  main } =
    useContextReady();
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
    toY: isActive
      ? -(s.m4 + s.m)
      : 0,
    main,
  });
  const title = isActive
    ? "Exit video sequencer"
    : "Video sequencer";
  return (
    <>
      {isActive
        ? siblings
        : inActiveSiblings}
      <motion.div
        className="absolute left-0 bottom-0"
        style={{
          bottom: s.m15 - s.m0125,
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
    </>
  );
};
