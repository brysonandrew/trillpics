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
      style={style}
    
      {...props}
    />
  );
};
