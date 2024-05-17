import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
  TButtonMotionProps,
  TSvgProps,
} from "@brysonandrew/config-types";
import { TCircleProps } from "~/components/layout/circle/circle";
import {
  resolveAccessibilityTitles,
  resolveUrlId,
} from "@brysonandrew/utils-attributes";
import { TFlatProps } from "~/types/ui";
import { FADE_PRESENCE_DELAY_02 } from "~/constants/animation";
import { boxStyle } from "~/constants/box/style";
import { boxSize } from "~/constants/box/size";
import { useReady } from "~/hooks/use-ready";
import {
  GRADIENT_MESH_DARK,
  GRADIENT_MESH_LIGHT,
} from "~app/color/gradient/mesh";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { isString } from "~/utils/validation/is/string";
import { TBoxSizesKey } from "~/constants/box/size/constants";
import {
  GRADIENT_BLUE_PINK_YELLOW,
  GRADIENT_BORDER_COMMON,
  GRADIENT_TEAL_YELLOW_PINK,
  GRADIENT_ZEBRA,
  RADIAL_TEAL_YELLOW_PINK,
} from "~app/color/gradient";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { useDarkMode } from "@brysonandrew/dark-mode";
import { LINEAR_GRADIENT_SVG_ID } from "~/shell/global/svg/gradients/blue-pink-yellow";

export type TPillBProps =
  TButtonMotionProps &
    TFlatProps & {
      Root?: FC<TButtonMotionProps>;
      Icon: FC<TSvgProps>;
      iconProps?: TSvgProps;
      circleProps?: TCircleProps;
      outerCircle?: ReactNode;
      size?: TBoxSizesKey;
      isSelected?: boolean;
    };
export const PillB: FC<TPillBProps> = ({
  Root = motion.button,
  isSelected,
  Icon,
  title,
  iconProps,
  circleProps,
  children,
  classValue,
  outerCircle,
  isFlat,
  style,
  size = "s",
  disabled,
  ...props
}) => {
  const box = boxStyle({
    layer: "flat",
    borderRadius: "xl",
    size,
  });
  const {
    minHeight,
    minWidth,
    boxShadow,
    borderRadius,
  } = box;
  const sm = boxSize(size);
  const isReady = useReady();
  const { isDarkMode } = useDarkMode();
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
        "center shrink-0",
        "disabled:(grayscale-100 brightness-60 opacity-80 cursor-not-allowed)",
        "text-white dark:text-white-1",
        isFlat
          ? ""
          : "_gradient-radial",
        classValue
      )}
      {...(isReady
        ? { layout: true }
        : {})}
      layout={isReady}
      style={{
        ...(isFlat
          ? { boxShadow }
          : {}),
        minHeight,
        minWidth,
        borderRadius,
        ...style,
      }}
      {...props}
    >
      <>
        {isSelected && (
          <motion.div
            className="fill -inset-2 _gradient-radial"
            layoutId="PillB_SELECTED"
            style={{
              borderRadius,
            }}
            initial={{
              scale: 1,
              opacity: 1,
            }}
            animate={{
              scale: [1, 0.5, 1],
              opacity: [1, 0.5, 1],
            }}
            exit={{
              scale: 1,
              opacity: 1,
            }}
          />
        )}
        {!disabled && !isFlat && (
          <motion.div
            layout
            style={{
              borderRadius,
              filter: "blur(12px)",
            }}
            className={clsx(
              "absolute -inset-2 _gradient-radial opacity-20"
            )}
          />
        )}
        <motion.div
          key={resolveCompositeKey(
            "PillB.motion.div.Icon",
            title,
            `${isReady}`
          )}
          className={clsx(
            "center relative bg-black-04",
            isFlat
              ? ""
              : "_gradient-radial"
          )}
          {...(isReady
            ? { layout: true }
            : {})}
          style={{
            height: minHeight,
            width: minWidth,
            borderRadius,
            marginLeft: 0,
          }}
        >
          <div
            className="center relative shrink-0 border-2 border-transparent"
            style={{
              borderRadius,
              height: sm.minHeight,
              width: sm.minWidth,
              ...(isDarkMode
                ? {
                    ...GRADIENT_MESH_DARK,
                    backgroundSize:
                      "2px 2px",
                  }
                : {
                    ...GRADIENT_MESH_LIGHT,
                    backgroundSize:
                      "2px 2px",
                    backgroundColor:
                      "rgba(0,0,0,0)",
                  }),

              backgroundClip: isSelected
                ? "border-box"
                : "padding-box",
            }}
          >
            <Icon
              {...(isDarkMode
                ? {
                    fill: resolveUrlId(
                      LINEAR_GRADIENT_SVG_ID
                    ),
                    stroke: "none",
                  }
                : {
                    fill: "#ffffff",
                    stroke:
                      resolveUrlId(
                        LINEAR_GRADIENT_SVG_ID
                      ),
                    strokeWidth: 1,
                  })}
            />
          </div>
        </motion.div>
        <>
          {outerCircle && (
            <>{outerCircle}</>
          )}
        </>
        {isString(children) ? (
          <motion.div
            className="relative row gap-2 px-2 px-0 whitespace-nowrap"
            style={{
              height: sm.minHeight,
            }}
            {...(isReady
              ? FADE_PRESENCE_DELAY_02
              : {})}
          >
            <motion.div className="relative">
              {children}
            </motion.div>
          </motion.div>
        ) : (
          <>{children}</>
        )}
      </>
    </Root>
  );
};
