import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
  TButtonMotionProps,
  TSvgProps,
} from "@brysonandrew/config-types";
import { TCircleProps } from "~/components/layout/circle/circle";
import { resolveAccessibilityTitles } from "@brysonandrew/utils-attributes";
import { TFlatProps } from "~/types/ui";
import { FADE_PRESENCE_DELAY_02 } from "~/constants/animation";
import { boxStyle } from "~/constants/box/style";
import { boxSize } from "~/constants/box/style/size";
import { useReady } from "~/hooks/use-ready";
import { TexturesMesh } from "~/components/textures/mesh";
import { GRADIENT_MESH_DARK } from "~app/color/gradient/mesh";
import { resolveCompositeKey } from "@brysonandrew/utils-key";

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
  disabled,
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
  const isReady = useReady();

  return (
    <Root
      key={resolveCompositeKey(
        "PillB",
        title,
        `${isReady}`
      )}
      {...resolveAccessibilityTitles(
        title
      )}
      disabled={disabled}
      className={clsx(
        "relative",
        "row shrink-0 gap-2",
        "disabled:(grayscale-100 brightness-60 opacity-80 cursor-not-allowed)",
        "text-black",
        " _gradient-radial",
        isFlat
          ? "background-flat"
          : "background",
        classValue
      )}
      {...(isReady
        ? { layout: true }
        : {})}
      layout={isReady}
      style={{
        minHeight,
        minWidth,
        borderRadius,
        ...style,
      }}
      {...props}
    >
      {!disabled && !isFlat && (
        <motion.div
          layout
          style={{
            borderRadius,
            filter: "blur(12px)",
          }}
          className="absolute -inset-2 _gradient-radial opacity-20"
        />
      )}

      <motion.div
         key={resolveCompositeKey(
          "PillB.motion.div.Icon",
          title,
          `${isReady}`
        )}
        className={clsx(
          "center relative bg-black-04 z-10"
        )}
        {...(isReady
          ? { layout: true }
          : {})}
        style={{
          minHeight: sm.minHeight,
          minWidth: sm.minWidth,
          borderRadius,
          marginLeft: padding,
          ...GRADIENT_MESH_DARK,
          backgroundSize: "4px 4px",
        }}
      >
        <Icon />
        <TexturesMesh />
      </motion.div>
      {outerCircle && (
        <>{outerCircle}</>
      )}
      <>
        {children && (
          <motion.div
            className="relative row gap-2 mr-1 -mt-0.25 whitespace-nowrap"
            {...(isReady
              ? FADE_PRESENCE_DELAY_02
              : {})}
          >
            {children}
          </motion.div>
        )}
      </>
    </Root>
  );
};
