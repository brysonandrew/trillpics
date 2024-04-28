import type { FC } from "react";
import { FULLSCREEN_Z } from "~/constants/dom";
import { TUsePicBackdrop } from "~/shell/pics/pic/backdrop/use-backdrop";
import { TBoxChildProps } from "~/shell/pics/pic/box";
import {
  PicDisplay,
  TPicDisplayProps,
} from "~/shell/pics/pic/display";
import { centerInScreen } from "~/utils/dimensions/center-in-viewport";

export const PicDisplayZoomed: FC<
  TPicDisplayProps &
    TUsePicBackdrop &
    TBoxChildProps
> = (props) => {
  return (
    <PicDisplay
      style={{
        position: "fixed",
        ...(props.zoomDimensions
          .isDimensions &&
        props.screen.isDimensions
          ? centerInScreen(
              props.zoomDimensions,
              props.screen
            )
          : {}),
        zIndex: FULLSCREEN_Z,
      }}
      onTap={props.onZoomOut}
      {...props}
    />
  );
};
