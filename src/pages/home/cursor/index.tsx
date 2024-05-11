import type { FC } from "react";
import { PicCursor } from "~/pics/grid/pic/cursor";
import { useClickZoom } from "~/context/hooks/click/zoom";
import { useMove } from "~/context/hooks/move";

export const HomeCursor: FC = () => {
  const isDisabled = useClickZoom();
  useMove();
  return (
    <PicCursor
      title="Fullscreen"
      isDisabled={isDisabled}
    />
  );
};
