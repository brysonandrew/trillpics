import type { FC } from "react";
import { PicCursor } from "~/pics/grid/pic/cursor";
import { useClickZoom } from "~/context/hooks/click/zoom";
import { useMove } from "~/context/hooks/move";
import { IconsOpen } from "~/components/icons/open";
import { TypographyBordered } from "~/components/typography/bordered";
import { FILTERS_FAT_2_SVG_PROPS } from "~/shell/global/svg/filters/fat/2";
import { TypographyBorderedMd } from "~/components/typography/bordered/md";

export const HomeCursor: FC = () => {
  const isDisabled = useClickZoom();
  useMove();
  return (
    <PicCursor isDisabled={isDisabled}>
      <div className="row gap-2">
        <IconsOpen />
        <TypographyBorderedMd>
          Fullscreen
        </TypographyBorderedMd>
      </div>
    </PicCursor>
  );
};
