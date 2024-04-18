import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
  TButtonMotionProps,
  TSvgProps,
} from "@brysonandrew/config-types";
import { TCircleProps } from "@/components/decoration/circle/circle";
import { Glow } from "@/components/decoration/glow";
import { resolveInteractiveLabels } from "@brysonandrew/utils-attributes";
import { CircleIcon } from "@/components/buttons/circle/icon";
import { FADE_PRESENCE_DELAY_02 } from "@/constants/animation";
import { useApp } from "@brysonandrew/app";
import { Background1Rounded } from "@/components/decoration/background/1/rounded";
import { TFlatProps } from "@/types/ui";

export type TPillBProps =
  TButtonMotionProps &
    TFlatProps & {
      Icon: FC<TSvgProps>;
      iconProps?: TSvgProps;
      circleProps?: TCircleProps;
      outerCircle?: ReactNode;
      isRtl?: boolean;
    };
export const PillB: FC<TPillBProps> = ({
  Icon,
  title,
  iconProps,
  circleProps,
  children,
  classValue,
  outerCircle,
  isFlat,
  isRtl,
  style,
  ...props
}) => {

  return (
    <motion.button
      className={clsx(
        "relative h-10 text-lg text-white dark:text-gray-8",
        "btn-disabled",
        classValue
      )}
      style={{
        ...style,
      }}
      whileHover="hover"
      {...resolveInteractiveLabels(
        title
      )}
      {...props}
    >
      {isFlat ? null : <Glow  />}
      {outerCircle}
      <motion.div
        className={clsx(
          "relative row p-1 gap-3",
          "overflow-hidden",

          children &&
            (isRtl ? "pl-4" : "pr-4"),
          isRtl
            ? "row-reverse right-0"
            : "row left-0"
        )}
        layout
      >
        <Background1Rounded
          isFlat={isFlat}
        />
        <CircleIcon
          circleProps={{
            layout: true,
            isFlat,
            ...circleProps,
          }}
          iconProps={iconProps}
          Icon={Icon}
        />
        {children && (
          <motion.div
            layout="size"
            className="relative flex items-center gap-2 whitespace-nowrap font-display-led"
            {...FADE_PRESENCE_DELAY_02}
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </motion.button>
  );
};
