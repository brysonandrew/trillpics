import type { FC } from "react";
import { useShow } from "@/pages/home/controls/show/use-show";
import { IconsVisible } from "@/components/icons/visible";
import { PillBHover } from "@/components/interactive/pill/b/hover";

export const ControlsShow: FC = () => {
  const {
    isViewingOnlyVideoPics,
    videoPicsCount,
    onToggleShow,
    isPreviewOpen,
    isVideoMode,
  } = useShow();

  return (
    <PillBHover
      title={
        isViewingOnlyVideoPics
          ? "Show all pics added to video"
          : `Show only ${videoPicsCount} pics added to video`
      }
      onClick={onToggleShow}
      Icon={IconsVisible}
      {...(isVideoMode && !isPreviewOpen
        ? {}
        : {})}
    >
      <>
        {isViewingOnlyVideoPics
          ? "Show all"
          : `Show [${videoPicsCount}]`}
      </>
    </PillBHover>
  );
};
