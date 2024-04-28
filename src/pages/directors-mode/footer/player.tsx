import type { FC } from "react";
import { IconsPlay } from "~/components/icons/playback/play";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { useNavigationControls } from "~/hooks/use-navigation/controls";
import { VIDEO_PLAYER_PATH_VALUE } from "~/constants/params";
import { TDirectorsModeFooterProps } from "~/pages/directors-mode/footer/types";

export const ControlsPlayer: FC<
  TDirectorsModeFooterProps
> = ({
  Button = PillBHover,
  title,
  ...props
}) => {
  const { togglePathValue } =
    useNavigationControls();
  const handleClick = () => {
    togglePathValue(
      VIDEO_PLAYER_PATH_VALUE
    );
  };
  return (
    <Button
      title={
        title ?? "View video preview"
      }
      onClick={handleClick}
      Icon={IconsPlay}
      {...props}
    >
      {title ?? "Preview Video"}
    </Button>
  );
};
