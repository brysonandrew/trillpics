import type { FC } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { PillB } from "~/components/buttons/pill/b";
import { IconsPicZoomIn24 } from "~/components/icons/pic/zoom-in/24";
import { FADE_PRESENCE } from "~/constants/animation";
import { TUseBoxChildProps } from "~/shell/pics/pic/box/use-box";
import {
  TUsePicHoverConfig,
  usePicHover,
} from "~/shell/pics/pic/hover/use-pic-hover";
import { TPropsWithChildren } from "@brysonandrew/config-types";

export type TPicHoverProps =
  TUsePicHoverConfig &
    Pick<
      TUseBoxChildProps,
      | "isHover"
      | "onToggle"
    >;
export const PicHover: FC<
  TPropsWithChildren<TPicHoverProps>
> = ({
  isHover,
  onToggle,
  children,
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
          {children}
        </motion.div>
      )}
    </>
  );
};
