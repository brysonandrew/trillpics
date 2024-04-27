import type { FC } from "react";
import { useShow } from "~/pages/directors-mode/footer/controls/show/use-show";
import { IconsGroup } from "~/components/icons/group";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { VideoPicCounterFloating } from "~/shell/screen/video-pic-counter/floating";
import { TDirectorsModeFooterProps } from "~/pages/directors-mode/footer/types";

export const ControlsShow: FC<
  TDirectorsModeFooterProps
> = ({
  Button = PillBHover,
  ...props
}) => {
  const {
    isViewingOnlyVideoPics,
    onToggleShow,
  } = useShow();

  const title = isViewingOnlyVideoPics
    ? "Show All"
    : `Show Selected`;

  return (
    <Button
      title={title}
      outerCircle={
        <VideoPicCounterFloating />
      }
      onClick={onToggleShow}
      Icon={IconsGroup}
      {...props}
    >
      {title}
    </Button>
  );
};
