import type { FC } from "react";
import {  AnimatePresence,  motion,  MotionConfig,} from "framer-motion";
import { FADE_PRESENCE } from "~/constants/animation";
import { TUsePicVideoResult } from "~/hooks/pic/video";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { PillB } from "~/components/buttons/pill/b";
import { IconsVideo } from "~/components/icons/video/video";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { FILTERS_FAT_SVG_ID, FILTERS_FAT_SVG_PROPS } from "~/shell/global/svg/filters/fat";

export type TPicVideoControlsProps =
  TPropsWithChildren<TUsePicVideoResult>;
export const PicVideoControls: FC<
  TPicVideoControlsProps
> = (props) => {
  const {
    isCurrAdded: isAdded,
    children,
  } = props;
  return (
    <motion.div
      key="video mode counter"
      className="fill"
      {...FADE_PRESENCE}
    >
      <MotionConfig
        transition={{
          duration: 0.2,
          delay: 0.6,
        }}
      >
        <AnimatePresence>
          {isAdded && (
            <motion.div
              key="VideoControlsCounter"
              className="row gap-2 h-12 px-2 text-gray-9"
              style={{
                ...FILTERS_FAT_SVG_PROPS,
              }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </motion.div>
  );
};
