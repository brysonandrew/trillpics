import type { FC } from "react";
import { motion } from "framer-motion";
import {
  TUsePicDisplayConfig,
  usePicDisplay,
} from "~/shell/pics/pic/display/use-display";
import { TUsePicBackdrop } from "~/shell/pics/pic/backdrop/use-backdrop";
import { TUseBox } from "~/shell/pics/pic/box";
import { TImgMotionProps } from "@brysonandrew/config-types";

export type TPicDisplayProps = Pick<
  TImgMotionProps,
  "style" | "onTap"
> &
  TUsePicDisplayConfig &
  Pick<TUseBox, "cellDimensions"> &
  Partial<TUsePicBackdrop>;
export const PicDisplay: FC<
  TPicDisplayProps
> = ({ style, onTap, ...props }) => {
  const {
    src,
    onLayoutAnimationComplete,
  } = usePicDisplay(props);
  const { name } = props;
  return (
    <motion.img
      key={src}
      layoutId={name}
      src={src}
      alt={`░▒▓█ pic #${name} █▓▒░`}
      draggable={false}
      style={{
        textAlign: "center",
        ...style,
      }}
      onTap={onTap}
      onLayoutAnimationComplete={
        onLayoutAnimationComplete
      }
    />
  );
};
