import type { FC } from "react";
import { motion } from "framer-motion";
import { TUsePicBackdrop } from "~/shell/pics/pic/backdrop/use-backdrop";
import { TUseBoxChildProps } from "~/shell/pics/pic/box/use-box";
import { TImgMotionProps } from "@brysonandrew/config-types";
import { resolvePicSrc } from "~/utils/src";
export const SEARCH_PARAM_ID = "open";

export type TPicDisplayProps = Pick<
  TImgMotionProps,
  | "style"
  | "onTap"
  | "onLayoutAnimationComplete"
> &
  Pick<
    TUseBoxChildProps,
    "cellDimensions" | "name"
  > &
  Partial<TUsePicBackdrop>;
export const PicDisplay: FC<
  TPicDisplayProps
> = ({
  style,
  onTap,
  onLayoutAnimationComplete,
  name,
}) => {
  const src = resolvePicSrc(name);
  const isVacant =
    typeof name === "number";
  if (isVacant)
    return (
      <motion.div
        layoutId={String(name)}
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
  return (
    <motion.img
      key={src}
      layoutId={String(name)}
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
