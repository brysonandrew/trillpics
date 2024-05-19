import type { FC } from "react";
import { IconsShuffle } from "~/components/icons/pic/shuffle";
import { useTrillPicsStore } from "~/store/middleware";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { useBlurXAnimate } from "~/hooks/blur/animate";

export const HudLeftShuffle: FC<{
  isLabel: boolean;
}> = ({ isLabel }) => {
  const { updatePics } =
    useTrillPicsStore(
      ({ updatePics }) => ({
        updatePics,
      })
    );
  const handler = useBlurXAnimate();

  const randomizePics = () => {
    handler();
    updatePics();
  };
  const title = "Randomize Pics";
  return (
    <PillBHover
      key={title}
      title={title}
      isLabel={isLabel}
      subtitle="Re-arrange all pics in the gallery at random."
      onClick={randomizePics}
      Icon={IconsShuffle}
      {...PRESENCE_OPACITY}
    >
      Shuffle
    </PillBHover>
  );
};
