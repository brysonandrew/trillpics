import type { FC } from "react";
import { motion } from "framer-motion";
import { resolvePicSrc } from "~/utils/src";
import { TPicProps } from "~/pics/grid/pic";
import {
  TDivMotionProps,
  TImgMotionProps,
} from "@brysonandrew/config-types";
import clsx from "clsx";
import {
  decryptRemoving,
  removingCheck,
} from "~/hooks/pic/video/read/entries";
import { FULLSCREEN_Z } from "~/constants/dom";

export type TPicDisplayProps =
  TDivMotionProps &
    TImgMotionProps &
    Pick<TPicProps, "name">;
export const PicDisplay: FC<
  TPicDisplayProps
> = ({
  name,
  src = resolvePicSrc(name),
  classValue,
  style,
  ...props
}) => {
  const isRemoving =
    removingCheck(name);
    if (isRemoving) {
      console.log(name)
    }
  src =
    src ?? resolvePicSrc(isRemoving
      ? decryptRemoving(name)
      : name);

  return (
    <motion.img
      className={clsx(
        classValue ?? "relative"
      )}
      key={name}
      layoutId={name}
      src={src}
      alt={`░▒▓█ pic #${name} █▓▒░`}
      draggable={false}
      style={{
        ...style,
      
      }}
      // onError={
      //   name === "11"
      //     ? console.log
      //     : NOOP
      // }
      // onLoad={
      //   name === "11"
      //     ? console.log
      //     : NOOP
      // }
      {...props}
    />
  );
};
