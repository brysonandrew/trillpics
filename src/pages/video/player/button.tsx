import {
  FC,
  PropsWithChildren,
} from "react";
import { IconsPlay } from "~/components/icons/playback/play";
import {
  PillBHover,
  TPillBHoverProps,
} from "~/components/buttons/pill/b/hover";
import { useNavigationControls } from "~/hooks/navigation/controls";
import {
  HOME_ROUTE,
  VIDEO_PLAYER_ROUTE,
} from "~/constants/params";
import { usePicVideoReadCount } from "~/hooks/pic/video/read/count/hook";
import { IconsHome } from "~/components/icons/home";

export const CONTROLS_PLAYER_TITLE =
  "Viewing room";
type TProps =
  Partial<TPillBHoverProps> & {
    isShowOnlyActive?: boolean;
    Button?: FC<
      Partial<TPillBHoverProps>
    >;
  };

export const ControlsPlayer: FC<
  PropsWithChildren<TProps>
> = ({
  Button = PillBHover,
  isShowOnlyActive,
  ...props
}) => {
  const count = usePicVideoReadCount();
  const { togglePathValue, isActive } =
    useNavigationControls(
      VIDEO_PLAYER_ROUTE
    );
  const title = isActive
    ? "Exit viewing room"
    : CONTROLS_PLAYER_TITLE;

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
      title={title}
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
