import type { FC } from "react";
import { BPill } from "@/components/interactive/b-pill";
import { useVideoStore } from "@/store";
import { IconsCross } from "@/components/icons/cross";
import {
  useHoverKey,
  NONE_CURSOR_KEY,
} from "@brysonandrew/cursor";

export const FooterClear: FC = () => {
  const { videoPics, updateState } =
    useVideoStore();
  const { isHover, handlers } =
    useHoverKey(
      NONE_CURSOR_KEY,
      "FooterClear"
    );
  const handleClear = () => {
    updateState({ videoPics: [] });
  };
  const title =
    "Remove all pics from video";

  return (
    <BPill
      title={title}
      onClick={handleClear}
      Icon={IconsCross}
      {...handlers}
    >
      {isHover ? title : ""}
    </BPill>
  );
};
