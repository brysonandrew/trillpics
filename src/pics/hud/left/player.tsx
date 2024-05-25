import type {
  FC,
  PropsWithChildren,
} from "react";
import { motion } from "framer-motion";
import { IconsPlay } from "~/components/icons/playback/play";
import {
  PillBHover,
  TPillBHoverProps,
} from "~/components/buttons/pill/b/hover";
import { useNavigationControls } from "~/hooks/navigation/controls";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";
import { VIDEO_PLAYER_ROUTE } from "~/constants/params";
import { PlaybackButtonsPlay } from "~/components/remotion/player/playback/buttons/play";
import { useTrillPicsStore } from "~/store/middleware";
import { usePicVideoReadCount } from "~/hooks/pic/video/read/count/hook";
import { boxSize } from "~/constants/box/size";
import { useLocation } from "react-router";
export const CONTROLS_PLAYER_TITLE =
  "Viewing room";
type TProps = TVideoFooterProps &
  Partial<TPillBHoverProps>;
export const ControlsPlayer: FC<
  PropsWithChildren<TProps>
> = ({
  Button = PillBHover,
  title,
  children,
  ...props
}) => {
  const { pathname } = useLocation();
  const count = usePicVideoReadCount();
  const { screen } = useTrillPicsStore(
    ({ screen }) => ({
      screen,
    })
  );
  const s = boxSize();
  const { togglePathValue, isActive } =
    useNavigationControls(
      VIDEO_PLAYER_ROUTE
    );
  const handleClick = () => {
    togglePathValue(VIDEO_PLAYER_ROUTE);
  };
  if (!screen.isDimensions) return null;
  if (isActive) {
    return (
      <motion.div
        className="relative row"
        style={{
          left: 0,
          top: 0,
          gap: s.m05,
          x: 8,
        }}
      >
        {children}
        <PlaybackButtonsPlay
          {...props}
        />
      </motion.div>
    );
  }

  return (
    <Button
      isSelected={isActive}
      title={
        title ?? CONTROLS_PLAYER_TITLE
      }
      subtitle={
        count === 0
          ? "View and download a video with up to 5 gallery pics."
          : "View and download a sequence of pics as a video."
      }
      onClick={handleClick}
      Icon={IconsPlay}
      {...props}
    >
      {title}
    </Button>
  );
};
