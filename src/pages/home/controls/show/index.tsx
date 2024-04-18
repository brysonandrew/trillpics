import type { FC } from "react";
import { useShow } from "@/pages/home/controls/show/use-show";
import { IconsGroup } from "@/components/icons/group";
import { PillBHover } from "@/components/buttons/pill/b/hover";

export const ControlsShow: FC = () => {
  const {
    isViewingOnlyVideoPics,
    videoPicsCount,
    onToggleShow,
    isPlayerOpen,
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
      Icon={IconsGroup}
      {...(isVideoMode && !isPlayerOpen
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
