import type { FC } from "react";
import { PicCursor } from "~/pics/grid/pic/cursor";
import { useClickZoom } from "~/context/hooks/click/zoom";
import { Helmet } from "react-helmet-async";
import { IconsOpen40 } from "~/components/icons/open/40";

export const Home: FC = () => {
  const isDisabled = useClickZoom();
  return (
    <>
      <Helmet>
        <title>
          Trill Pics | AI Art Gallery
        </title>
      </Helmet>
      <PicCursor
        isDisabled={isDisabled}
      >
        <IconsOpen40 />
      </PicCursor>
    </>
  );
};
