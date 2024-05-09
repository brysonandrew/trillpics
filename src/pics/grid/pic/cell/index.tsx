import type { FC } from "react";
import { PicDisplay, TPicDisplayProps } from "~/pics/grid/pic/display";
import { FULLSCREEN_Z } from "~/constants/dom";
import { TBoxChildProps } from "~/pics/grid/pic/box";
import { resolvePresence } from "~/utils/animation";
import { TCursorCell } from "~/context/cursor";
import { TUsePicZoomResult } from "~/pics/grid/pic/hooks/zoom";

export const PicDisplayCell: FC<
    TPicDisplayProps &
    TCursorCell &
    TBoxChildProps &
    Pick<TUsePicZoomResult, 'isCellClosing' | 'reset'>  
> = ({
  style,
  column,
  row,
  isCellClosing,
  reset,
  ...props
}) => {
  return (
    <PicDisplay
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        ...style,
        ...(isCellClosing 
          ? { zIndex: FULLSCREEN_Z }
          : { zIndex: 0 }),
      }}
      onLayoutAnimationComplete={reset}
      {...(isCellClosing
        ? {}
        : resolvePresence(
            { opacity: 0.9 },
            { opacity: 1 }
          ))}
      {...props}
    />
  );
};
