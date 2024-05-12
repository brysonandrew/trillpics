import type { FC } from "react";
import {
  motion,
  MotionConfig,
} from "framer-motion";
import { PRESENCE_OPACITY_ANIMATE_DELAY_02 } from "~/constants/animation";
import { TUsePicVideoResult } from "~/hooks/pic/video";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { FILTERS_FAT_SVG_PROPS } from "~/shell/global/svg/filters/fat";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";

export type TPicVideoControlsProps =
  TPropsWithChildren<TUsePicVideoResult>;
export const PicVideoControls: FC<
  TPicVideoControlsProps
> = (props) => {
  const { isCurrAdded, children } =
    props;
  return (
    <motion.div
      key={
        isCurrAdded
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
      <div
        className="fill"
        style={{
          ...FILTERS_FAT_SVG_PROPS,
        }}
      >
        {children}
      </div>
      <div className="relative text-white">
        {children}
      </div>
    </motion.div>
  );
};
