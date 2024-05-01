import type { FC } from "react";
import {
  PicDisplay,
  TPicDisplayProps,
} from "~/shell/pics/pic/display";
import { FULLSCREEN_Z } from "~/constants/dom";
import { TPicHoverResult } from "~/shell/pics/pic/use-hover";
import { TImgMotionProps } from "@brysonandrew/config-types";
import { TBoxChildProps } from "~/shell/pics/pic/box";
import { resolvePresence } from "~/utils/animation";

export const PicDisplayCell: FC<
  Partial<TPicHoverResult> &
    TPicDisplayProps &
    TBoxChildProps &
    Pick<TImgMotionProps, "onTap">
> = ({
  style: { left, width, height },
  ...props
}) => {
  const {
    frontCheckState: [
      isFront,
      setFront,
    ],
  } = props;

  const handleLayoutAnimationComplete =
    () => {
      setFront(false);
    };
  return (
    <PicDisplay
      style={{
        position: "absolute",
        left,
        top: 0,
        bottom: 0,
        right: 0,
        width,
        height,
        ...(isFront
          ? { zIndex: FULLSCREEN_Z }
          : { zIndex: 0 }),
      }}
      {...(isFront
        ? {}
        : resolvePresence(
            { opacity: 0.9 },
            { opacity: 1 }
          ))}
      onLayoutAnimationComplete={
        handleLayoutAnimationComplete
      }
      {...props.handlers}
      {...props}
    />
  );
};
