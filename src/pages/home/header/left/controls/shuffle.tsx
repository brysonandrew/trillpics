import type { FC } from "react";
import { IconsShuffle } from "@/components/icons/shuffle";
import { useVideoStore } from "@/store";
import { PillBHover } from "@/components/interactive/pill/b/hover";

export const ControlsShuffle: FC =
  () => {
    const { updatePicsEntries } =
      useVideoStore();
    const randomizePics = () => {
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
