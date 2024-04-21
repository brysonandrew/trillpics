import type { FC } from "react";
import { motion } from "framer-motion";
import { FadeV } from "@brysonandrew/fade-edge";
import clsx from "clsx";
import { PillB } from "~/components/buttons/pill/b";
import { IconsPicZoomIn24 } from "~/components/icons/pic/zoom-in/24";
import { FADE_PRESENCE } from "~/constants/animation";
import { TUsePic } from "~/pages/home/pics/pic/use-pic";

export type TPicDisplayHoverZoomProps = Pick<
  TUsePic,
  "isVideoMode" | "onToggle"
>;
export const PicDisplayHoverZoom: FC<
TPicDisplayHoverZoomProps
> = ({ isVideoMode, onToggle }) => {
  return (
    <motion.div
      key="zoom"
      className={clsx(
        "absolute cursor-pointer z-50 rounded-full center",
        "top-3 right-3"
      )}
      {...FADE_PRESENCE}
    >
      {isVideoMode ? (
        <PillB
          isFlat
          title="Zoom pic"
          Icon={IconsPicZoomIn24}
          onClick={onToggle}
        />
      ) : (
        <IconsPicZoomIn24 />
      )}
    </motion.div>
  );
};
