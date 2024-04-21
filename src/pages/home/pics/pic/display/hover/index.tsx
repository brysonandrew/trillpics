import type { FC } from "react";
import { TUsePic } from "~/pages/home/pics/pic/use-pic";
import {
  PicDisplayHoverZoom,
  TPicDisplayHoverZoomProps,
} from "~/pages/home/pics/pic/display/hover/zoom";
import { PicDisplayHoverFade } from "~/pages/home/pics/pic/display/hover/fade";

export type TPicDisplayHoverProps = Pick<
  TUsePic,
  "isAdded" | "isControls"
> &
  TPicDisplayHoverZoomProps;
export const PicDisplayHover: FC<TPicDisplayHoverProps> = ({
  isControls,
  isAdded,
  ...zoomProps
}) => {
  return (
    <>
      {isControls && (
        <PicDisplayHoverZoom
          {...zoomProps}
        />
      )}
      {isAdded && (
        <PicDisplayHoverFade />
      )}
    </>
  );
};
