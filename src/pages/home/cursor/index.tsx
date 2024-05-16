import type { FC } from "react";
import { PicCursor } from "~/pics/grid/pic/cursor";
import { useClickZoom } from "~/context/hooks/click/zoom";
import { useMove } from "~/context/hooks/move";
import { IconsOpen } from "~/components/icons/open";

export const HomeCursor: FC = () => {
  const isDisabled = useClickZoom();
  useMove();
  return (
    <PicCursor isDisabled={isDisabled}>
      <div className="row gap-2">
        <IconsOpen />
        Fullscreen
      </div>
    </PicCursor>
  );
};
