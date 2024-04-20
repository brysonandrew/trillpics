import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
  TButtonMotionProps,
  TSvgProps,
} from "@brysonandrew/config-types";
import { TCircleProps } from "~/components/decoration/circle/circle";
import { resolveInteractiveLabels } from "@brysonandrew/utils-attributes";
import { TFlatProps } from "~/types/ui";
import { FADE_PRESENCE_DELAY_02 } from "~/constants/animation";
import { DecorationNet } from "~/components/decoration/background/net";
import { Glow } from "~/components/decoration/glow";
import { useBorderStyleMd } from "~/components/buttons/use-border-style/md";

export type TPillBProps =
  TButtonMotionProps &
    TFlatProps & {
      Icon: FC<TSvgProps>;
      iconProps?: TSvgProps;
      circleProps?: TCircleProps;
      outerCircle?: ReactNode;
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
  style,
  ...props
}) => {
  const circleStyle =
    useBorderStyleMd(isFlat);
  const {
    minHeight,
    minWidth,
    ...smCircleStyle
  } = circleStyle;

  return (
    <motion.button
      {...resolveInteractiveLabels(
        title
      )}
      className={clsx(
        "relative",
        "row shrink-0 gap-2 px-1",
        "btn-disabled",
        "text-main",
        isFlat
          ? "background-flat"
          : "background",
        classValue
      )}
      layout
      style={{
        ...circleStyle,
        ...style,
      }}
      {...props}
    >
      {outerCircle && (
        <>{outerCircle}</>
      )}
      {!isFlat && (
        <Glow classValue="-inset-1 opacity-30" />
      )}
      <motion.div
        layout
        className="center relative p-1 _net-gradient"
        style={smCircleStyle}
      >
        <Icon />
      </motion.div>
      <>
        {children && (
          <motion.div
            className="relative row gap-2 mr-2 -mb-0.75 whitespace-nowrap"
            {...FADE_PRESENCE_DELAY_02}
          >
            {children}
          </motion.div>
        )}
      </>
    </motion.button>
  );
};
