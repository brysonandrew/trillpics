import {
  FC,
  PropsWithChildren,
  useEffect,
} from "react";
import {
  animate,
  motion,
} from "framer-motion";
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
import { THudContainer } from "~/pics/hud/left";
import { TChildren } from "@brysonandrew/config-types";
import { useLocation } from "react-router";

type TProps = {
  isLabel: boolean;
  container: THudContainer;
  siblings: TChildren;
};
export const HudLeftVideo: FC<
  PropsWithChildren<TProps>
> = ({
  isLabel,
  children,
  container,
  siblings,
}) => {
  const { pathname } = useLocation();
  const s = boxSize();
  const { dragger } = useContextGrid();
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
  useEffect(() => {
    animate<number>(
      dragger.y,
      -container.height / 2 + s.m,
      {
        ease: "easeIn",
        duration: 0.4,
      }
    );
  }, []);

  const title = isActive
    ? "Exit Video Maker"
    : "Video Maker";
  return (
    <>
      {isActive ? siblings : null}
      <motion.div
        className="absolute left-0 bottom-0"
        style={{
          bottom: s.m15,
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
          isSelected={
            isActive
            // pathname === HOME_ROUTE
          }
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
        {isActive ? children : null}
      </motion.div>
    </>
  );
};
