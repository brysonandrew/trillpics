import type { FC } from "react";
import { motion } from "framer-motion";
import { resolveLayoutId } from "~/pages/video/_root/reorder/placeholders/list";
import { box } from "~uno/rules/box";
import { TDivMotionProps } from "@brysonandrew/config-types";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import clsx from "clsx";

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
      className={clsx(
        "fill row-start-space backdrop-blur-sm",
        "border border-white-06 dark:border-black-07 bg-white-01 dark:bg-black-02"
      )}
      style={{
        borderRadius: box.radius.xl / 2,
        padding: box.padding,
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
