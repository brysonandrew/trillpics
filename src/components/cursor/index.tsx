import type { FC } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { TChildren } from "@brysonandrew/config-types/dom/main";
import { TDivMotionProps } from "@brysonandrew/config-types/dom/motion";
import { useContextReady } from "~/shell/ready/context";

const DEFAULT_ANIMATE = {
  opacity: 1,
  scale: 1,
};

const resolveSize = (size: number) => {
  return {
    width: size,
    height: size,
  };
};

type TProps = TDivMotionProps & {
  size?: number;
  children?: TChildren;
};
export const Sight: FC<TProps> = ({
  classValue,
  style,
  size = 8,
  animate,
  children,
  ...props
}) => {
  const { main } = useContextReady();
  return (
    <motion.div
      style={{
        left: main.cursor.x,
        top: main.cursor.y,
        originX: "50%",
        originY: "50%",
        opacity: 1,
        scale: 1,
        backgroundColor: "red",
        ...resolveSize(size),
        ...main.cursor.label,
        ...style,
      }}
      className={clsx(
        "fixed center pointer-events-none rounded-full cursor-default z-0",
        classValue
      )}
      animate={{
        ...DEFAULT_ANIMATE,
        ...(typeof animate === "object"
          ? animate
          : {}),
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
