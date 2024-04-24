import type { FC } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { PillB } from "~/components/buttons/pill/b";
import { IconsPicZoomIn24 } from "~/components/icons/pic/zoom-in/24";
import { FADE_PRESENCE } from "~/constants/animation";
import { TUseBox } from "~/shell/pics/pic/box";
import {
  TUsePicHoverConfig,
  usePicHover,
} from "~/shell/pics/pic/hover/use-pic-hover";

export type TPicHoverProps =
  TUsePicHoverConfig &
    Pick<
      TUseBox,
      | "isHover"
      | "isDirectorsMode"
      | "onToggle"
    >;
export const PicHover: FC<
  TPicHoverProps
> = ({
  isHover,
  isDirectorsMode,
  onToggle,
  ...props
}) => {
  const { isControls } =
    usePicHover(props);
  return (
    <>
      {isHover && isControls && (
        <motion.div
          key="zoom"
          className={clsx(
            "absolute cursor-pointer z-50 rounded-full center",
            "top-3 right-3"
          )}
          {...FADE_PRESENCE}
        >
          {isDirectorsMode ? (
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
      )}
    </>
  );
};
