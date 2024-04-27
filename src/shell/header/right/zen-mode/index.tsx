import type { FC } from "react";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { IconsVisible } from "~/components/icons/video/visible";
import { HideControlsModal } from "~/shell/header/right/zen-mode/modal";
import { useTrillPicsStore } from "~/store";

export const HideControls: FC = () => {
  const { isControls, toggleControls } =
    useTrillPicsStore(
      ({
        isControls,
        toggleControls,
      }) => ({
        isControls,
        toggleControls,
      })
    );

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
