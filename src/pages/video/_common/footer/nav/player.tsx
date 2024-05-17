import type { FC } from "react";
import { IconsPlay } from "~/components/icons/playback/play";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { useNavigationControls } from "~/hooks/navigation/controls";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";
import { VIDEO_PLAYER_ROUTE } from "~/constants/params";
import { PlaybackButtonsPlay } from "~/components/remotion/player/playback/buttons/play";

export const ControlsPlayer: FC<
  TVideoFooterProps
> = ({
  Button = PillBHover,
  title,
  ...props
}) => { 
  const { togglePathValue, isActive } =
    useNavigationControls(VIDEO_PLAYER_ROUTE);
  const handleClick = () => {

    togglePathValue(VIDEO_PLAYER_ROUTE);
  };

  // const title = isVideoPics
  //   ? undefined
  //   : "Random Video";
  if (isActive) {
    return <PlaybackButtonsPlay
    
    isSelected
    
    />
  }
  return (
    <Button
      title={
        title ?? "View video preview"
      }
      onClick={handleClick}
      Icon={IconsPlay}
      isSelected={isActive}
      {...props}
    >
      {title}
    </Button>
  );
};
