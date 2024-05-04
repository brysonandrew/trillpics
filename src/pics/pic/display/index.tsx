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
import { TPicProps } from "~/pics/pic";
import { NOOP } from "@brysonandrew/utils-function";
import {
  HP,
  P,
} from "~/pics/pic/constants";
export const SEARCH_PARAM_ID = "open";

export type TPicDisplayProps = Pick<
  TImgMotionProps,
  "onTap" | "onLayoutAnimationComplete"
> &
  Pick<TPicProps, "name"> & {
    style: CSSProperties &
      TDimensions & { left: number };
  };
export const PicDisplay: FC<
  TPicDisplayProps
> = ({
  style: {
    width,
    height,
    left,
    ...style
  },
  onTap,
  onLayoutAnimationComplete,
  name,
}) => {
  const styleProps: MotionProps = {
    onTap,
    onLayoutAnimationComplete:
      onLayoutAnimationComplete,
    style: {
      textAlign: "center",
      left: left - HP,
      width: width + P,
      height: height + P,
      top: -HP,
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
        {...styleProps}
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
      {...styleProps}
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
