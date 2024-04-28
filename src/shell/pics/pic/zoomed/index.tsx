import type { FC } from "react";
import { PortalBody } from "@brysonandrew/layout-portal";
import { PicBackdrop } from "~/shell/pics/pic/backdrop";
import { TUseBoxChildProps } from "~/shell/pics/pic/box/use-box";
import { PicDisplayZoomed } from "~/shell/pics/pic/display/zoomed";
import { IconsPicZoomOut } from "~/components/icons/pic/zoom-out";
import { PicZoomedExitIcon } from "~/shell/pics/pic/zoomed/exit-icon";

export const PicZoomed: FC<
  TUseBoxChildProps
> = (boxChildProps) => {
  return (
    <PortalBody>
      <PicBackdrop {...boxChildProps}>
        {(backdropChildProps) => (
          <>
            <PicDisplayZoomed
              {...boxChildProps}
              {...backdropChildProps}
            />
            <PicZoomedExitIcon />
          </>
        )}
      </PicBackdrop>
    </PortalBody>
  );
};
