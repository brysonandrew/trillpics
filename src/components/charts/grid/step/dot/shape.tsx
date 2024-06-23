import { motion } from "framer-motion";
import clsx from "clsx";
import { TDivMotionProps } from "@brysonandrew/config-types";

type TProps = TDivMotionProps & {
  isHovering?: boolean;
};
export const ChartsGridStepDotShape = ({
  style,
  isHovering,
  ...props
}: TProps) => {
  return (
    <motion.div
      className={clsx("bg-white")}
      style={{
        position: "relative",
        ...style,
      }}
      initial={false}
      animate={{
        scale: isHovering ? 1.4 : 1,
      }}
      {...props}
    />
  );
};
