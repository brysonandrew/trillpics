import type { FC } from "react";
import { motion } from "framer-motion";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { TypographyBordered } from "~/components/typography/bordered";
import { TUsePicSelected } from "~/hooks/pic/selected";

export type TPicVideoControlsProps =
  TPropsWithChildren<TUsePicSelected>;
export const PicVideoControls: FC<
  TPicVideoControlsProps
> = (props) => {
  const { isAdded, children } =
    props;
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
      <TypographyBordered  classValue="text-main-inverted"
          shadow={{
            classValue: "text-gray-9",
          }}>
        {children}
      </TypographyBordered>
    </motion.div>
  );
};
