import {
  FC,
  PropsWithChildren,
} from "react";
import { motion } from "framer-motion";
import { useNavigationControls } from "~/hooks/navigation/controls";
import { IconsVideo } from "~/components/icons/video/video";
import { VideoPicCounterFloating } from "~/shell/screen/video-pic-counter/floating";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import {
  HOME_ROUTE,
  VIDEO_ROUTE,
} from "~/constants/params";
import { useVideoPicsCheck } from "~/hooks/pic/video/read/video-pics-check/hook";
import { boxSize } from "~/constants/box/size";
import { useContextGrid } from "~/context";
import { TChildren } from "@brysonandrew/config-types";
import { THudContainer } from "~/pics/hud";
import { IconsHome } from "~/components/icons/home";
import { useDraggerReset } from "~/pages/video/_root/reorder/use-dragger-reset";

type TProps = {
  isLabel: boolean;
  container: THudContainer;
  siblings: TChildren;
  inActiveSiblings: TChildren;
};
export const HudLeftVideo: FC<
  PropsWithChildren<TProps>
> = ({
  isLabel,
  children,
  container,
  siblings,
  inActiveSiblings,
}) => {
  const s = boxSize();
  const { dragger, main } =
    useContextGrid();
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
          y: dragger.y,
          x: 0,
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
          isLabel={isLabel}
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
