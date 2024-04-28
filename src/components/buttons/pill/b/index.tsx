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
import { LightingGlow } from "~/components/decoration/lighting/glow";
import { resolvePresence } from "~/utils/animation";
import { boxStyle } from "~/constants/box/style";

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
    borderRadius: "borderRadius",
    size: "md",
  });
  const {
    minHeight,
    minWidth,
    boxShadow,
    borderRadius,
  } = box;

  return (
    <Root
      {...resolveInteractiveLabels(
        title
      )}
      className={clsx(
        "relative",
        "row shrink-0 gap-2 px-1",
        "disabled:grayscale-100",
        "text-main",
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
      {!isFlat && (
        <LightingGlow classValue="-inset-1 opacity-30" />
      )}
      <motion.div
        className={clsx(
          "center relative p-1 _weave-gradient"
        )}
        layout
        style={{
          borderRadius,
        }}
      >
        <Icon />
        <motion.div
          layout
          style={{
            boxShadow,
            borderRadius,
          }}
          className="fill"
          {...resolvePresence(
            { opacity: 0 },
            {
              opacity: [0, 0.6, 0.2],
              transition: {
                duration: 1,
                ease: "linear",
              },
            }
          )}
        />
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
