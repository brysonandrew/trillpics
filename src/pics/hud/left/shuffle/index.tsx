import type { FC } from "react";
import { IconsShuffle } from "~/components/icons/pic/shuffle";
import { useTrillPicsStore } from "~/store/middleware";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { useBlurAnimate } from "~/hooks/animate/blur/animate";

export const HudLeftShuffle: FC<{
  isLabel: boolean;
}> = ({ isLabel }) => {
  const { updatePics } =
    useTrillPicsStore(
      ({ updatePics }) => ({
        updatePics,
      })
    );
  const handleBlur = useBlurAnimate();

  const handleClick = () => {
    handleBlur();
    updatePics();
  };
  const title = "Shuffle pics";
  
  return (
    <PillBHover
      key={title}
      title={title}
      isLabel={isLabel}
      subtitle="Re-arrange pics at random."
      onClick={handleClick}
      Icon={IconsShuffle}
      {...PRESENCE_OPACITY}
    >
      Shuffle
    </PillBHover>
  );
};
