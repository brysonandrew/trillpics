import type { FC } from "react";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";
import { useNavigationControls } from "~/hooks/navigation/controls";
import {
  VIDEO_ROUTE,
  VIDEO_SCHEDULER_ROUTE,
} from "~/constants/params";
import { IconsEdit } from "~/components/icons/edit";
import { HoverText } from "~/pages/video/_common/footer/nav/hover-text";

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
      onClick={handleClick}
      Icon={IconsEdit}
      {...props}
    >
      <HoverText>{title}</HoverText>
    </Button>
  );
};
