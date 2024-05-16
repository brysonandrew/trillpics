import type { FC } from "react";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { IconsVisible } from "~/components/icons/video/visible";
import { HideControlsModal } from "~/pics/header/right/zen-mode/modal";
import { useTrillPicsStore } from "~/store/middleware";

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
  const title = "Hide Controls"; // "Hide controls";

  return (
    <PillBHover
      title={title}
      onClick={handleClick}
      Icon={IconsVisible}
      subtitle={`Move your mouse or pointer off and
        then on the page to bring the
        controls back.`}
    >
      {title}
    </PillBHover>
  );
};
