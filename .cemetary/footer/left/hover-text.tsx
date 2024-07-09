import type {
  FC,
  PropsWithChildren,
} from "react";
import { motion } from "framer-motion";
import { TDivMotionProps } from "@brysonandrew/config-types";

export const HoverText: FC<
  PropsWithChildren<TDivMotionProps>
> = ({ children, style, ...props }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none"
      style={{ y: '33vh', ...style }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
