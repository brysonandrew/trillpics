import type { FC } from "react";
import { FULLSCREEN_Z } from "~/constants/dom";
import {
  PicDisplay,
  TPicDisplayProps,
} from "~/pics/grid/pic/display";
import { centerInScreen } from "~/utils/dimensions/center-in-viewport";
import { useReadyContext } from "~/shell/ready/context";

export const PicZoomedDisplay: FC<
  TPicDisplayProps
> = (props) => {
  const { screen } = useReadyContext();
  const shortest = Math.min(
    screen.width,
    screen.height
  );
  const zoomDimensions = {
    width: shortest,
    height: shortest,
  };
  const screenDimensions = {
    width: screen.width,
    height: screen.height,
  };
  return (
    <PicDisplay
      style={{
        position: "fixed",
        ...centerInScreen(
          zoomDimensions,
          screenDimensions
        ),
        zIndex: FULLSCREEN_Z,
      }}
      {...props}
    />
  );
};
