import type { FC } from "react";
import { motion } from "framer-motion";
import { resolvePicSrc } from "~/utils/src";
import { TPicProps } from "~/pics/grid/pic";
import { NOOP } from "@brysonandrew/utils-function";
import {
  TDivMotionProps,
  TImgMotionProps,
} from "@brysonandrew/config-types";

export type TPicDisplayProps =
  TDivMotionProps &
    TImgMotionProps &
    Pick<TPicProps, "name">;
export const PicDisplay: FC<
  TPicDisplayProps
> = ({ name, src = resolvePicSrc(name), ...props }) => {
  const isVacant =
    typeof name === "number";
  if (isVacant) {
    return (
      <motion.div
        layoutId={String(name)}
        {...props}
      />
    );
  }

  return (
    <motion.img
      key={name}
      layoutId={name}
      src={src}
      alt={`░▒▓█ pic #${name} █▓▒░`}
      draggable={false}
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
      {...props}
    />
  );
};
