import type { FC } from "react";
import { motion } from "framer-motion";
import { resolvePicSrc } from "~/utils/src";
import { TPicProps } from "~/pics/grid/pic";
import {
  TDivMotionProps,
  TImgMotionProps,
} from "@brysonandrew/config-types";
import clsx from "clsx";
import { TPic } from "~/store/state/pics/types";

export const resolvePicLayoutId = (
  name: TPic
) => `pic-${name}` as const;

export type TPicDisplayProps =
  TDivMotionProps &
    TImgMotionProps &
    Pick<TPicProps, "name">;
export const PicDisplay: FC<
  TPicDisplayProps
> = ({
  name,
  src = resolvePicSrc({
    base: "remotion",
    name,
  }),
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
      layoutId={resolvePicLayoutId(
        name
      )}
      src={src}
      alt={`░▒▓█ pic #${name} █▓▒░`}
      draggable={false}
      style={{
        ...style,
      }}
      {...props}
    />
  );
};
