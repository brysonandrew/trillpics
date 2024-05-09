import type {
  CSSProperties,
  FC,
} from "react";
import {
  motion,
  MotionProps,
} from "framer-motion";
import {
  TDimensions,
  TImgMotionProps,
} from "@brysonandrew/config-types";
import { resolvePicSrc } from "~/utils/src";
import { TPicProps } from "~/pics/grid/pic";
import { NOOP } from "@brysonandrew/utils-function";

export type TPicDisplayProps = Pick<
  TImgMotionProps,
  "onLayoutAnimationComplete"
> &
  Pick<TPicProps, "name"> & {
    style: CSSProperties &
      TDimensions & { left: number };
  };
export const PicDisplay: FC<
  TPicDisplayProps
> = ({
  style,
  onLayoutAnimationComplete,
  name,
}) => {
  const imgMotionProps: MotionProps = {
    onLayoutAnimationComplete,
    style: {
      textAlign: "center",
      ...style,
    },
  };
  const src = resolvePicSrc(name);
  const isVacant =
    typeof name === "number";
  if (isVacant) {
    return (
      <motion.div
        layoutId={String(name)}
        {...imgMotionProps}
      />
    );
  }

  return (
    <motion.img
      key={src}
      layoutId={String(name)}
      src={src}
      alt={`░▒▓█ pic #${name} █▓▒░`}
      draggable={false}
      {...imgMotionProps}
      onError={
        name === "11"
          ? console.log
          : NOOP
      }
      onLoad={
        name === "11"
          ? console.log
          : NOOP
      }
    />
  );
};
