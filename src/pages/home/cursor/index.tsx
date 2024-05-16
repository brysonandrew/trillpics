import type { FC } from "react";
import { PicCursor } from "~/pics/grid/pic/cursor";
import { useClickZoom } from "~/context/hooks/click/zoom";
import { useMove } from "~/context/hooks/move";
import { IconsOpen } from "~/components/icons/open";
import { TypographyBordered } from "~/components/typography/bordered";

export const HomeCursor: FC = () => {
  const isDisabled = useClickZoom();
  useMove();
  return (
    <PicCursor isDisabled={isDisabled}>
      <div className="row gap-2 mix-blend-difference">
        <IconsOpen />
        <TypographyBordered classValue="text-2xl text-main">
          Fullscreen
        </TypographyBordered>
      </div>
    </PicCursor>
  );
};
