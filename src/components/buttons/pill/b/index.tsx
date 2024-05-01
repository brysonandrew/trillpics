import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
  TButtonMotionProps,
  TSvgProps,
} from "@brysonandrew/config-types";
import { TCircleProps } from "~/components/layout/circle/circle";
import { resolveInteractiveLabels } from "@brysonandrew/utils-attributes";
import { TFlatProps } from "~/types/ui";
import { FADE_PRESENCE_DELAY_02 } from "~/constants/animation";
import { LightingGlow } from "~/components/layout/lighting/glow";
import { boxStyle } from "~/constants/box/style";
import { boxSize } from "~/constants/box/style/size";

export type TPillBProps =
  TButtonMotionProps &
    TFlatProps & {
      Root?: FC<TButtonMotionProps>;
      Icon: FC<TSvgProps>;
      iconProps?: TSvgProps;
      circleProps?: TCircleProps;
      outerCircle?: ReactNode;
    };
export const PillB: FC<TPillBProps> = ({
  Root = motion.button,
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
  const box = boxStyle({
    layer: "flat",
    borderRadius: "XL",
    size: "md",
  });
  const {
    minHeight,
    minWidth,
    boxShadow,
    borderRadius,
    padding,
  } = box;
  const sm = boxSize({ size: "sm" });

  return (
    <Root
      {...resolveInteractiveLabels(
        title
      )}
      className={clsx(
        "relative",
        "row shrink-0 gap-2",
        "disabled:grayscale-100",
        "text-black",
        " _gradient-radial",
        isFlat
          ? "background-flat"
          : "background",
        classValue
      )}
      layout
      style={{
        minHeight,
        minWidth,
        borderRadius,
        ...style,
      }}
      {...props}
    >
      {/* {!isFlat && (
        <LightingGlow classValue="-inset-1 opacity-50" />
      )} */}
      {/* <motion.div
        className={clsx(
          "center absolute -inset-0.5 opacity-20"
        )}
        layout
        style={{
          borderRadius,
        }}
      /> */}
      <motion.div
        className={clsx(
          "center relative _gradient-mesh bg-black-06 z-10"
        )}
        layout
        style={{
          minHeight: sm.minHeight,
          minWidth: sm.minWidth,
          borderRadius,
          marginLeft: padding,
        }}
      >
        <Icon />
      </motion.div>
      {outerCircle && (
        <>{outerCircle}</>
      )}
      <>
        {children && (
          <motion.div
            className="relative row gap-2 mr-1 -mt-0.25 whitespace-nowrap"
            {...FADE_PRESENCE_DELAY_02}
          >
            {children}
          </motion.div>
        )}
      </>
    </Root>
  );
};
