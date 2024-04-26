import type { FC } from "react";
import { PicDisplay } from "~/shell/pics/pic/display";
import { FULLSCREEN_Z } from "~/constants/dom";
import { TUseBoxChildProps } from "~/shell/pics/pic/box/use-box";
import { TImgMotionProps } from "@brysonandrew/config-types";
import { resolvePresence } from "@brysonandrew/motion-core";

export const PicDisplayCell: FC<
  TUseBoxChildProps &
    Pick<TImgMotionProps, "onTap">
> = (props) => {
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
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        ...(isFront
          ? { zIndex: FULLSCREEN_Z }
          : { zIndex: 0 }),
        ...props.cellDimensions,
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
      {...props}
    />
  );
};
