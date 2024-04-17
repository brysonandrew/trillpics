import type { FC } from "react";
import { useVideoStore } from "@/store";
import { IconsCross } from "@/components/icons/cross";
import { PillBHover } from "@/components/interactive/pill/b/hover";

export const ControlsClear: FC = () => {
  const { updateState } =
    useVideoStore();
  const handleClear = () => {
    updateState({ videoPics: [] });
  };
  const title =
    "Remove all pics from video";

  return (
    <PillBHover
      title={title}
      onClick={handleClear}
      Icon={IconsCross}
    >
      {title}
    </PillBHover>
  );
};
