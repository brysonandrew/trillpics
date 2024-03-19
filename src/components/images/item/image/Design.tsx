import { FC } from "react";
import { motion } from "framer-motion";
import { TUseImageReturn } from "@components/images/useImage";
import { TImgMotionProps } from "@brysonandrew/config-types";

type TProps = Omit<
  TImgMotionProps,
  "src"
> &
  TUseImageReturn["designProps"];
export const Design: FC<TProps> = ({
  layoutId,
  style,
  src,
  ...props
}) => {
  const printSize = style.width ?? 0;

  if (!src) return null;

  return (
    <motion.img
      className="pointer-events-none"
      src={src}
      width={printSize}
      height={printSize}
      style={{
        ...style,
        top: style.top + printSize * 0,
        left:
          style.left + printSize * 0,
      }}
      layoutId={layoutId}
      {...props}
    />
  );
};
