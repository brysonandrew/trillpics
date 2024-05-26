import type {
  FC,
  PropsWithChildren,
} from "react";
import { IconsPlay } from "~/components/icons/playback/play";
import {
  PillBHover,
  TPillBHoverProps,
} from "~/components/buttons/pill/b/hover";
import { useNavigationControls } from "~/hooks/navigation/controls";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";
import {
  HOME_ROUTE,
  VIDEO_PLAYER_ROUTE,
  VIDEO_ROUTE,
} from "~/constants/params";
import { usePicVideoReadCount } from "~/hooks/pic/video/read/count/hook";
import { IconsVideo } from "~/components/icons/video/video";
import { IconsHome } from "~/components/icons/home";
export const CONTROLS_PLAYER_TITLE =
  "Viewing room";
type TProps = TVideoFooterProps &
  Partial<TPillBHoverProps> & {
    isShowOnlyActive?: boolean;
  };

export const ControlsPlayer: FC<
  PropsWithChildren<TProps>
> = ({
  Button = PillBHover,
  isShowOnlyActive,
  title,
  children,
  ...props
}) => {
  const count = usePicVideoReadCount();

  const { togglePathValue, isActive } =
    useNavigationControls(
      VIDEO_PLAYER_ROUTE
    );
  const handleClick = () => {
    togglePathValue(
      isActive
        ? HOME_ROUTE
        : VIDEO_PLAYER_ROUTE
    );
  };
  // if (isShowOnlyActive && !isActive)
  // return null;
  return (
    <Button
      direction="rtl"
      isSelected={isActive}
      title={
        isActive
          ? "Exit viewing room"
          : CONTROLS_PLAYER_TITLE
      }
      subtitle={
        !isActive
          ? count === 0
            ? "View and download a video with up to 5 gallery pics."
            : "View and download a sequence of pics as a video."
          : ""
      }
      onClick={handleClick}
      Icon={
        isActive ? IconsHome : IconsPlay
      }
      {...props}
    />
  );
};
