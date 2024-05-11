import type { FC } from "react";
import { FULLSCREEN_Z } from "~/constants/dom";
import { TBoxChildProps } from "~/pics/grid/pic/box";
import { PicDisplay } from "~/pics/grid/pic/display";
import { centerInScreen } from "~/utils/dimensions/center-in-viewport";
import { useTrillPicsStore } from "~/store/middleware";

export const PicZoomedDisplay: FC<
    TBoxChildProps
> = ({ style, ...props }) => {
  const { screen } = useTrillPicsStore(
    ({ screen }) => ({ screen })
  );
  if (!screen.isDimensions) return null;
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
        ...style,
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
