import { FC, memo } from "react";
import { IconsShuffle } from "~/components/icons/pic/shuffle";
import { useTrillPicsStore } from "~/store/middleware";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { useBlurAnimate } from "~/hooks/animate/blur/animate";

export const HudLeftShuffle: FC = memo(() => {
  const { updatePics } =
    useTrillPicsStore(
      ({ updatePics }) => ({
        updatePics,
      })
    );
  const handleBlur = useBlurAnimate('shuffle');

  const handleClick = () => {
    handleBlur(4);
    updatePics();
  };
  const title = "Shuffle pics";
  
  return (
    <PillBHover
      key={title}
      title={title}
      subtitle="Re-arrange pics at random."
      onClick={handleClick}
      Icon={IconsShuffle}
    >
      Shuffle
    </PillBHover>
  );
});
