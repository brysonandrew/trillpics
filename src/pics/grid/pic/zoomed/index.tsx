import type { FC } from "react";
import { PortalBody } from "@brysonandrew/layout-portal";
import { PicBackdrop } from "~/pics/grid/pic/backdrop";
import { TBoxChildProps } from "~/pics/grid/pic/box";
import { PicZoomedDisplay } from "~/pics/grid/pic/zoomed/display";
import { FULLSCREEN_Z } from "~/constants/dom";

export const PicZoomed: FC<
  TBoxChildProps
> = (props) => {
  return (
    <PortalBody>
      <PicBackdrop
        style={{ zIndex: FULLSCREEN_Z }}
      />
      <PicZoomedDisplay {...props} />
    </PortalBody>
  );
};
