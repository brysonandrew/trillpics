import type { FC } from "react";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { VideoPicCounterFloating } from "~/shell/screen/video-pic-counter/floating";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";
import { IconsReel } from "~/components/icons/reel";
import { useNavigationControls } from "~/hooks/use-navigation/controls";
import {
  VIDEO_ROUTE,
  VIDEO_SCHEDULER_ROUTE,
} from "~/constants/params";

export const ControlsShow: FC<
  TVideoFooterProps
> = ({
  Button = PillBHover,
  ...props
}) => {
  const { togglePathValue, isActive } =
    useNavigationControls(
      VIDEO_SCHEDULER_ROUTE
    );

  const handleClick = () => {
    togglePathValue(
      isActive
        ? VIDEO_ROUTE
        : VIDEO_SCHEDULER_ROUTE
    );
  };

  const title = isActive
    ? "Show All"
    : `Show Selected`;

  return (
    <Button
      title={title}
      outerCircle={
        <VideoPicCounterFloating />
      }
      onClick={handleClick}
      Icon={IconsReel}
      {...props}
    >
      {title}
    </Button>
  );
};
