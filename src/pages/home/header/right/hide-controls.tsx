import type {
  CSSProperties,
  FC,
} from "react";
import { PillBHover } from "@/components/buttons/pill/b/hover";
import { IconsHide } from "@/components/icons/hide";
import { useVideoStore } from "@/store";
import { useEventListener } from "@/hooks/events/useEventListener";

export const HideControls: FC = () => {
  const { isControls, toggleControls } =
    useVideoStore();
  const handleClick = () => {
    toggleControls(false);
  };
  const handleShow = () => {
    toggleControls(true);
  };


  const title = "Hide controls";

  return (
    <PillBHover
      title={title}
      onClick={handleClick}
      Icon={IconsHide}
    >
      {title}
    </PillBHover>
  );
};
