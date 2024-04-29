import type { FC } from "react";
import { PortalBody } from "@brysonandrew/layout-portal";
import { PicBackdrop } from "~/shell/pics/pic/backdrop";
import { TBoxChildProps } from "~/shell/pics/pic/box";
import { PicDisplayZoomed } from "~/shell/pics/pic/display/zoomed";
import { PicZoomedExitIcon } from "~/shell/pics/pic/zoomed/exit-icon";

export const PicZoomed: FC<
  TBoxChildProps
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
