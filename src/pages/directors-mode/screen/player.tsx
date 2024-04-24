import type { FC } from "react";
import { IconsPlay } from "~/components/icons/playback/play";
import { useVideoStore } from "~/store";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { useNavigationControls } from "~/hooks/use-navigation/controls";
import { VIDEO_PLAYER_PATH_VALUE } from "~/constants/params";

export const ControlsPlayer: FC =
  () => {
    const {} = useVideoStore();

    const { togglePathValue } =
      useNavigationControls(
        VIDEO_PLAYER_PATH_VALUE
      );
    const handleClick = () => {
      togglePathValue();
    };
    return (
      <PillBHover
        title={"View video preview"}
        onClick={handleClick}
        Icon={IconsPlay}
      >
        Preview Video
      </PillBHover>
    );
  };
