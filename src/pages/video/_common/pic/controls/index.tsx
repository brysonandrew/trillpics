import type { FC } from "react";
import { motion } from "framer-motion";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { TUsePicSelected } from "~/hooks/pic/selected";

export type TPicVideoControlsProps =
  TPropsWithChildren<TUsePicSelected>;
export const PicVideoControls: FC<
  TPicVideoControlsProps
> = (props) => {
  const { isAdded, children } = props;
  return (
    <motion.div
      key={
        isAdded
          ? "added"
          : "VideoControlsCounter"
      }
      className="relative row gap-2 h-12 mx-2 text-gray-9"
      transition={{
        duration: 0.1,
        delay: 0.1,
      }}
      {...PRESENCE_OPACITY}
    >
      <span className="_outline-filter">
        {children}
      </span>
    </motion.div>
  );
};
