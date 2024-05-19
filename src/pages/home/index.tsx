import type { FC } from "react";
import { PicCursor } from "~/pics/grid/pic/cursor";
import { useClickZoom } from "~/context/hooks/click/zoom";
import { IconsOpen } from "~/components/icons/open";
import { TypographyBorderedMd } from "~/components/typography/bordered/md";
import { Helmet } from "react-helmet-async";

export const Home: FC = () => {
  const isDisabled = useClickZoom();
  return (
    <>
      <Helmet>
        <title>Trill Pics | AI Art Gallery</title>
      </Helmet>
      <PicCursor
        isDisabled={isDisabled}
      >
        <div className="row gap-2">
          <IconsOpen />
          <TypographyBorderedMd>
            Fullscreen
          </TypographyBorderedMd>
        </div>
      </PicCursor>
    </>
  );
};
