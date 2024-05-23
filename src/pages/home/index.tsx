import { FC, useEffect } from "react";
import { PicCursor } from "~/pics/grid/pic/cursor";
import { Helmet } from "react-helmet-async";
import { IconsOpen40 } from "~/components/icons/open/40";
import { useContextGrid } from "~/context";
import { PortalBody } from "@brysonandrew/layout-portal";
import { FULLSCREEN_Z } from "~/constants/dom";
import { PicBackdrop } from "~/pics/grid/pic/backdrop";
import { PicZoomedDisplay } from "~/pics/grid/pic/zoomed/display";
import { useHomeClickSelect } from "~/pages/home/select";

export const Home: FC = () => {
  const { updatePic } =
    useContextGrid();
  const {
    isSelectedPics,
    names,
    cells,
    isRemoving,
  } = useHomeClickSelect();
  useEffect(() => {
    updatePic(document.body);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Trill Pics | AI Art Gallery
        </title>
      </Helmet>
      {isSelectedPics &&
        !isRemoving && (
          <PortalBody>
            <PicBackdrop
              style={{
                zIndex: FULLSCREEN_Z,
              }}
            />
            <PicZoomedDisplay
              {...cells[0]}
              name={names[0]}
            />
          </PortalBody>
        )}
      <PicCursor
        isDisabled={Boolean(
          isSelectedPics || isRemoving
        )}
      >
        <IconsOpen40 />
      </PicCursor>
    </>
  );
};
