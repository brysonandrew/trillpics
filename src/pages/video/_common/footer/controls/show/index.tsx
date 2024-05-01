import type { FC } from "react";
import { useShow } from "~/pages/video/_common/footer/controls/show/use-show";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { VideoPicCounterFloating } from "~/shell/screen/video-pic-counter/floating";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";
import { IconsReel } from "~/components/icons/reel";

export const ControlsShow: FC<
  TVideoFooterProps
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
      Icon={IconsReel}
      {...props}
    >
      {title}
    </Button>
  );
};
