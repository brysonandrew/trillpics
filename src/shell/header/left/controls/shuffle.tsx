import type { FC } from "react";
import { animate } from "framer-motion";
import { IconsShuffle } from "~/components/icons/pic/shuffle";
import { useTrillPicsStore } from "~/store";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { useVirtualizeContext } from "~/pics/virtualize/context";

export const ControlsShuffle: FC =
  () => {
    const { blurRef } =
      useVirtualizeContext();
    const { updatePicsEntries } =
      useTrillPicsStore(
        ({ updatePicsEntries }) => ({
          updatePicsEntries,
        })
      );
    const randomizePics = () => {
      const prev = blurRef.current.value.x.get();
      blurRef.current.control.x = animate(
        blurRef.current.value.x,
        100,
        {
          type: "tween",
          onComplete: () =>
            blurRef.current.value.x.set(prev),
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
