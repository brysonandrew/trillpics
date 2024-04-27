import type { FC } from "react";
import { animate } from "framer-motion";
import { IconsShuffle } from "~/components/icons/pic/shuffle";
import { useTrillPicsStore } from "~/store";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { useScroll } from "~/context/scroll";

export const ControlsShuffle: FC =
  () => {
    const { blurX, blurXRef } =
      useScroll();
    const { updatePicsEntries } =
      useTrillPicsStore(
        ({ updatePicsEntries }) => ({
          updatePicsEntries,
        })
      );
    const randomizePics = () => {
      const prev = blurX.get();
      blurXRef.current = animate(
        blurX,
        100,
        {
          type: "tween",
          onComplete: () =>
            blurX.set(prev),
        }
      );
      updatePicsEntries();
    };
    const title = "Randomize Pics";
    return (
      <PillBHover
        classValue="font-display-led"
        title={title}
        onClick={randomizePics}
        Icon={IconsShuffle}
      >
        Shuffle
      </PillBHover>
    );
  };
