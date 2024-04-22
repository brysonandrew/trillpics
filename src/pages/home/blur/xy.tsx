import type {
  FC,
  PropsWithChildren,
} from "react";
import { motion } from "framer-motion";
import {
  MOTION_BLUR_FILTER_X_PROPS,
  MOTION_BLUR_FILTER_Y_PROPS,
} from "~/pages/home/blur/constants";
import { List } from "~/pages/home/pics";

export const BlurXy: FC<
  PropsWithChildren
> = () => {
  return (
    <motion.div
      className="fill z-0"
      style={{
        ...MOTION_BLUR_FILTER_X_PROPS,
      }}
    >
      <motion.div
        className="fill"
        style={{
          ...MOTION_BLUR_FILTER_Y_PROPS,
        }}
      >
        <List />
      </motion.div>
    </motion.div>
  );
};
