import type { FC } from "react";
import { motion } from "framer-motion";
import { TUsePicVideoResult } from "~/hooks/pic/video";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { FILTERS_FAT_SVG_PROPS } from "~/shell/global/svg/filters/fat";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { TypographyBordered } from "~/components/typography/bordered";

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
      <TypographyBordered  classValue="text-main-inverted"
          shadow={{
            classValue: "text-gray-9",
          }}>
        {children}
      </TypographyBordered>
    </motion.div>
  );
};
