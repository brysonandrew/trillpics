import type { FC } from "react";
import { PortalBody } from "@brysonandrew/layout-portal";
import { PicBackdrop } from "~/pics/pic/backdrop";
import { TBoxChildProps } from "~/pics/pic/box";
import { PicDisplayZoomed } from "~/pics/pic/display/zoomed";
import { PicZoomedExitIcon } from "~/pics/pic/zoomed/exit-icon";

export const PicZoomed: FC<
  TBoxChildProps
> = (props) => {
  return (
    <PortalBody>
      <PicBackdrop>
        <PicDisplayZoomed {...props} />
        <PicZoomedExitIcon />
      </PicBackdrop>
    </PortalBody>
  );
};
