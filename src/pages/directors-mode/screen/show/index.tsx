import type { FC } from "react";
import { useShow } from "~/pages/directors-mode/screen/show/use-show";
import { IconsGroup } from "~/components/icons/group";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { VideoPicCounterFloating } from "~/shell/screen/video-pic-counter/floating";

export const ControlsShow: FC = () => {
  const {
    isViewingOnlyVideoPics,
    videoPicsCount,
    onToggleShow,
    isPlayerOpen,
  } = useShow();

  const title = isViewingOnlyVideoPics
    ? "Show All"
    : `Show Selected`;

  return (
    <PillBHover
      title={title}
      outerCircle={
        <VideoPicCounterFloating />
      }
      onClick={onToggleShow}
      Icon={IconsGroup}
    >
      {title}
    </PillBHover>
  );
};
