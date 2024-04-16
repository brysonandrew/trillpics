import type { FC } from "react";
import { BPill } from "@/components/interactive/b-pill";
import {
  NONE_CURSOR_KEY,
  useHoverKey,
} from "@brysonandrew/cursor";
import { IconsShuffle } from "@/components/icons/shuffle";
import { useVideoStore } from "@/store";

export const FooterShuffle: FC = () => {
  const { updatePicsEntries } =
    useVideoStore();
  const randomizePics = () => {
    updatePicsEntries();
  };
  const { isHover, handlers } =
    useHoverKey(
      NONE_CURSOR_KEY,
      "FooterShuffle"
    );

  const title = "Shuffle";

  return (
    <BPill
      title={title}
      onClick={randomizePics}
      Icon={IconsShuffle}
      {...handlers}
    >
      {isHover && <>Shuffle</>}
    </BPill>
  );
};
