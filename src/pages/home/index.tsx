import { FC } from "react";
import { PicCursor } from "~/pics/grid/pic/cursor";
import { Helmet } from "react-helmet-async";
import { PortalBody } from "@brysonandrew/layout-portal";
import { FULLSCREEN_Z } from "~/constants/dom";
import { PicBackdrop } from "~/pics/grid/pic/backdrop";
import { PicZoomedDisplay } from "~/pics/grid/pic/zoomed/display";
import { useHomeClickSelect } from "~/pages/home/select";
import { GridOptions } from "~/pics/hud/left/grid-options";
import { IconsOpen80 } from "~/components/icons/open/X";

export const Home: FC = () => {
  const cursorProps =
    useHomeClickSelect();
  const {
    isSelectedPics,
    names,
    cells,
    isRemoving,
  } = cursorProps;


  return (
    <>
      <Helmet>
        <title>
          Trill Pics | AI Art Gallery
        </title>
      </Helmet>
      {isRemoving ? null : (
        <>
          {isSelectedPics && (
            <PortalBody>
              <PicBackdrop

                onClick={
                  cursorProps.onClick
                }
                style={{
                  cursor:'pointer',
                  zIndex: FULLSCREEN_Z,
                }}
              />
              <PicZoomedDisplay
                {...cells[0]}
                classValue="pointer-events-none"
                name={names[0]}
              />
            </PortalBody>
          )}
        </>
      )}

      <PicCursor
        {...cursorProps}
      >
        <IconsOpen80 />
      </PicCursor>
      <GridOptions />
    </>
  );
};
