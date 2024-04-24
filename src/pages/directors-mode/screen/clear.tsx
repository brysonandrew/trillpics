import type { FC } from "react";
import { useVideoStore } from "~/store";
import { IconsTrash } from "~/components/icons/video/trash1";
import { PillBHover } from "~/components/buttons/pill/b/hover";

export const ControlsClear: FC = () => {
  const { removeVideo } =
    useVideoStore();
  const handleClear = () => {
    removeVideo();
  };
  const title =
    "Clear pics from video";

  return (
    <PillBHover
      title={title}
      onClick={handleClear}
      Icon={IconsTrash}
    >
      {title}
    </PillBHover>
  );
};
