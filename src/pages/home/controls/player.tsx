import type { FC } from "react";
import { IconsPlay } from "@/components/icons/play";
import { useVideoStore } from "@/store";
import { PillBHover } from "@/components/interactive/pill/b/hover";

export const ControlsPlayer: FC = () => {
  const {
    isPreviewOpen,
    togglePreview,
  } = useVideoStore();

  const handlePreview = () => {
    togglePreview(!isPreviewOpen);
  };

  return (
    <PillBHover
      title={"View video preview"}
      onClick={handlePreview}
      Icon={IconsPlay}
    >
      Preview
    </PillBHover>
  );
};
