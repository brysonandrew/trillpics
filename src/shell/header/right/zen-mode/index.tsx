import type { FC } from "react";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { IconsHide } from "~/components/icons/hide";
import { IconsInfo } from "~/components/icons/info";
import { IconsVisible } from "~/components/icons/video/visible";
import { HideControlsModal } from "~/shell/header/right/zen-mode/modal";
import { useVideoStore } from "~/store";

export const HideControls: FC = () => {
  const { isControls, toggleControls } =
    useVideoStore();
  const handleClick = () => {
    toggleControls(false);
  };
  const handleShow = () => {
    toggleControls(true);
  };
  const title = "Zen Mode"; // "Hide controls";

  return (
    <>
      <PillBHover
        title={title}
        onClick={handleClick}
        Icon={IconsVisible}
      >
        {title}
      </PillBHover>
      {!isControls && (
        <HideControlsModal
          Icon={IconsVisible}
          title={title}
          onCancel={handleShow}
        />
      )}
    </>
  );
};
