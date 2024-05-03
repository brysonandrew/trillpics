import type { FC } from "react";
import { IconsPlay } from "~/components/icons/playback/play";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { useNavigationControls } from "~/hooks/use-navigation/controls";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";
import { VIDEO_PLAYER_ROUTE } from "~/constants/params";

export const ControlsPlayer: FC<
  TVideoFooterProps
> = ({
  Button = PillBHover,
  title,
  ...props
}) => {
  const { togglePathValue } =
    useNavigationControls();
  const handleClick = () => {
    togglePathValue(VIDEO_PLAYER_ROUTE);
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
