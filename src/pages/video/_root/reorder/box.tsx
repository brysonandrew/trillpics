import type { FC } from "react";
import { motion } from "framer-motion";
import { resolveLayoutId } from "~/pages/video/_root/reorder/placeholders/list";
import { box } from "~uno/rules/box";
import { TDivMotionProps } from "@brysonandrew/config-types";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";

type TProps = TDivMotionProps & {
  index: number;
};
export const VideoRootReorderBox: FC<
  TProps
> = ({
  index,
  children,
  style,
  ...props
}) => {
  const s = box;
  return (
    <motion.div
      className="fill row-start-space border border-white-06 dark:border-black-06 bg-white-01 dark:bg-black-01 backdrop-blur-sm"
      style={{
        borderRadius: s.radius.xl / 2,
        padding: s.padding,
        ...style,
      }}
      layoutId={resolveLayoutId(index)}
      {...PRESENCE_OPACITY}
      {...props}
    >
      {children}
    </motion.div>
  );
};
