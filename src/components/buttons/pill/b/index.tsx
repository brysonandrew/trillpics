import { FC, ReactNode } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
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
import { GRADIENT_MESH_DARK } from "~app/color/gradient/mesh";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { isString } from "~/utils/validation/is/string";
import { TBoxSizesKey } from "~/constants/box/size/constants";
import { useDarkMode } from "@brysonandrew/dark-mode";
import { LINEAR_GRADIENT_SVG_ID } from "~/shell/global/svg/gradients/blue-pink-yellow";
import { GLITCH_FILTER_SVG_PROPS } from "~/shell/global/svg/filters/glitch";
// declare type MotionStyle = MotionCSS & MotionTransform & MakeMotion<SVGPathProperties> & MakeCustomValueType<CustomStyles>;
//augment validate.js

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
    height,
    width,
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
        classValue
      )}
      {...(isReady
        ? { layout: true }
        : {})}
      layout={isReady}
      style={
        {
          ...(isFlat
            ? { boxShadow }
            : {}),
          height,
          borderRadius,
          ...style,
        } as any
      }
      {...props}
    >
      <>
        {isSelected && (
          <motion.div
            className="fill -inset-2 _gradient-radial"
            layoutId="PillB_SELECTED"
            style={
              {
                borderRadius,
              } as any
            }
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

        <motion.div
          key={resolveCompositeKey(
            "PillB.motion.div.Icon",
            title,
            `${isReady}`
          )}
          className={clsx(
            "center relative bg-white dark:bg-black",
            isFlat
              ? ""
              : "_gradient-radial"
          )}
          {...(isReady
            ? { layout: true }
            : {})}
          style={
            {
              height,
              borderRadius,
              marginLeft: 0,
            } as any
          }
        >
          <div
            className="center relative shrink-0 border-1 border-transparent bg-gray dark:bg-black"
            style={{
              borderRadius,
              height: sm.height,
              width: sm.width,
              ...(isDarkMode
                ? {
                    ...GRADIENT_MESH_DARK,
                  }
                : {
                    ...GRADIENT_MESH_DARK,
                  }),
              backgroundSize: "2px 2px",
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
                  }
                : {
                    fill: "#ffffff",
                  })}
            />
          </div>
        </motion.div>
        <>
          {outerCircle && (
            <>{outerCircle}</>
          )}
        </>
        <AnimatePresence>
          {isString(children) ? (
            <motion.div
              key={`${title}`}
              className="relative row px-2 px-0 text-left text-sm"
              style={{
                height: sm.minHeight,
                ...GLITCH_FILTER_SVG_PROPS,
              }}
              {...(isReady
                ? FADE_PRESENCE_DELAY_02
                : {})}
            >
              <div className="uppercase font-sans _outline-filter lg:(text-sm whitespace-nowrap)">
                <div
                  className="absolute -inset-y-4 -inset-x-1 _gradient-radial opacity-20 filter-blur-md"
                  style={{
                    borderRadius,
                  }}
                />
                <span className="relative">
                  {children}
                </span>
              </div>
              <motion.div />
            </motion.div>
          ) : (
            <>{children}</>
          )}
        </AnimatePresence>
      </>
    </Root>
  );
};
