import type { FC } from "react";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";
import { useNavigationControls } from "~/hooks/navigation/controls";
import {
  VIDEO_ROUTE,
  VIDEO_SCHEDULER_ROUTE,
} from "~/constants/params";
import { IconsEdit } from "~/components/icons/edit";

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

  const title = "Sequencer"

  return (
    <Button
      title={title}
      subtitle="Drag and drop your pics to put them in the order you wish to see them in your video."
      onClick={handleClick}
      Icon={IconsEdit}
      isSelected={isActive}
      {...props}
    >
      {title}
    </Button>
  );
};
