import type { FC } from "react";
import { PortalBody } from "@brysonandrew/layout-portal";
import { PicBackdrop } from "~/pics/grid/pic/backdrop";
import { TBoxChildProps } from "~/pics/grid/pic/box";
import { PicZoomedDisplay } from "~/pics/grid/pic/zoomed/display";

export const PicZoomed: FC<
  TBoxChildProps
> = (props) => {
  return (
    <PortalBody>
      <PicBackdrop />
      <PicZoomedDisplay {...props} />
    </PortalBody>
  );
};
