import type { FC } from "react";
import { IconsPlay } from "@/components/icons/playback/play";
import { useVideoStore } from "@/store";
import { PillBHover } from "@/components/buttons/pill/b/hover";

export const ControlsPlayer: FC = () => {
  const {
    isPlayerOpen,
    togglePlayer,
  } = useVideoStore();

  const handlePreview = () => {
    togglePlayer(!isPlayerOpen);
  };

  return (
    <PillBHover
      title={"View video preview"}
      onClick={handlePreview}
      Icon={IconsPlay}
    >
      Preview Video
    </PillBHover>
  );
};
