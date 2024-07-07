import type { FC } from "react";
import { motion } from "framer-motion";
import { box } from "~uno/rules/box";
import {
  TOTAL_GAP,
  MAX_COUNT,
} from "~/pages/video/_root/reorder/constants";
import { useHoverKey } from "~/hooks/use-hover-key";
import { useContextReady } from "~/shell/ready/context";
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
  } = useContextReady();
  

  const isColumn =
    screen.container.width < 600;
  const width =
    screen.container.width -
    (isColumn ? box._ : box._3);
  const left = isColumn ? box._05 : box._25;
  const size =
    (width - TOTAL_GAP) /
    (isColumn ? 1 : MAX_COUNT);
  const borderRadius = boxRadius();

  const { main } = useContextReady();
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
        "absolute backdrop-blur-lg",
        "border",
        isHovering
          ? "border-white-03 dark:border-black-03 bg-white-02 dark:bg-black-02"
          : "border-white-02 dark:border-black-02 bg-white-01 dark:bg-black-01"
      )}
      style={{
        ...MOTION_BLUR_ADD_RANDOM_PROPS,
        x: dragger.x,
        y: dragger.y,
        borderRadius,
        top: box._3,
        left: left - box._15 + box._025,
        width: width + box._3 - box._05,
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
