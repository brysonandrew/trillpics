import type { FC } from "react";
import { motion } from "framer-motion";
import { boxSize } from "~uno/rules/box/size";
import {
  TOTAL_GAP,
  MAX_COUNT,
} from "~/pages/video/_root/reorder/constants";
import { useHoverKey } from "~/hooks/use-hover-key";
import { useReadyContext } from "~/shell/ready/context";
import { MOTION_BLUR_ADD_RANDOM_PROPS } from "~/shell/init/svg/filters/blur/constants";
import { boxRadius } from "~uno/rules/box/radius";
import { TDivMotionProps } from "@brysonandrew/config-types";
import clsx from "clsx";
export const HOVER_KEY_RootReorderBackground =
  "_RootReorderBackground";
type TProps = TDivMotionProps;
export const _RootReorderBackground: FC<
  TProps
> = ({ style, ...props }) => {
  const {
    screen,
    main: { dragger },
  } = useReadyContext();
  const s = boxSize();

  const isColumn =
    screen.container.width < 600;
  const width =
    screen.container.width -
    (isColumn ? s.m : s.m3);
  const left = isColumn ? s.m05 : s.m25;
  const size =
    (width - TOTAL_GAP) /
    (isColumn ? 1 : MAX_COUNT);
  const borderRadius = boxRadius();

  const { main } = useReadyContext();
  const start = () => {
    main.cursor.isOnGrid = false;
  };
  const stop = () => {
    main.cursor.isOnGrid = true;
  };
  const { motionHandlers, isHover } =
    useHoverKey({
      handlers: { start, stop },
    });
  const isHovering = isHover(
    HOVER_KEY_RootReorderBackground
  );

  return (
    <motion.div
      className={clsx(
        "absolute bg-white-01 dark:bg-black-01 backdrop-blur-lg",
        "border ",
        isHovering
          ? "border-white-06 dark:border-black-06"
          : "border-white-02 dark:border-black-02"
      )}
      style={{
        ...MOTION_BLUR_ADD_RANDOM_PROPS,
        x: dragger.x,
        y: dragger.y,
        borderRadius,
        top: s.m3,
        left: left - s.m15 + s.m025,
        width: width + s.m3 - s.m05,
        height: size,
        ...style,
      }}
      animate={{
        opacity: 0.5,
      }}
      {...motionHandlers(
        HOVER_KEY_RootReorderBackground
      )}
      {...props}
    />
  );
};
