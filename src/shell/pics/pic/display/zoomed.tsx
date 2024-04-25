import type { FC } from "react";
import { FULLSCREEN_Z } from "~/constants/dom";
import { TUsePicBackdrop } from "~/shell/pics/pic/backdrop/use-backdrop";
import { TUseBoxChildProps } from "~/shell/pics/pic/box/use-box";
import {
  PicDisplay,
  TPicDisplayProps,
} from "~/shell/pics/pic/display";
import { centerInViewport } from "~/utils/dimensions/center-in-viewport";

export const PicDisplayZoomed: FC<
  TPicDisplayProps &
    TUsePicBackdrop &
    TUseBoxChildProps
> = (props) => {
  return (
    <PicDisplay
      style={{
        position: "fixed",
        ...(props.zoomDimensions
          .isDimensions &&
        props.viewport.isDimensions
          ? centerInViewport(
              props.zoomDimensions,
              props.viewport
            )
          : {}),
        zIndex: FULLSCREEN_Z,
      }}
      onTap={props.onZoomOut}
      {...props}
    />
  );
};
