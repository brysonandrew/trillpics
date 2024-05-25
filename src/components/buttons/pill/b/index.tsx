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
      direction?: "ltr" | "rtl";
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
  direction = "ltr",
  disabled,
  ...props
}) => {
  const box = boxStyle({
    layer: "flat",
    borderRadius: "xl",
    size,
  });
  const {
    width,
    height,
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
        "gap-4 shrink-0",
        "disabled:(grayscale-100 brightness-60 opacity-80 cursor-not-allowed)",
        "hover:grayscale-100",
        classValue,
        direction === 'ltr' ? 'row' : 'row-reverse'
      )}
      {...(isReady
        ? { layout: true }
        : {})}
      layout={isReady}
      style={{
        ...(isFlat
          ? { boxShadow }
          : {}),
        height,
        borderRadius,
        ...style,
      }}
      {...props}
    >
      <>
        {isSelected && (
          <motion.div
            className="fill _gradient-radial pointer-events-none"
            // layoutId="selected pill b"
            layout
            style={{
              borderRadius,
              width,
              height,
            }}
            initial={{
              scale: 1,
              opacity: 0,
            }}
            animate={{
              scale: 1.2,
              opacity: 1,
            }}
            exit={{
              scale: 1,
              opacity: 0,
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
            "center relative bg-white dark:bg-black pointer-events-none",
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
            className="center relative shrink-0 border-1 border-transparent bg-gray dark:bg-black pointer-events-none"
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
             <>
          {outerCircle && (
            <>{outerCircle}</>
          )}
        </>
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
       
        <AnimatePresence>
          {isString(children) ? (
            <motion.div
              key={`${title}`}
              className="relative top-2 px-0 text-left text-sm pointer-events-none"
              style={{
                height: sm.height,
              }}
              {...(isReady
                ? FADE_PRESENCE_DELAY_02
                : {})}
            >
              <div className="uppercase font-sans _outline-filter lg:(text-sm whitespace-nowrap) pointer-events-none">
                <div
                  className="absolute -inset-y-4 -inset-x-1 _gradient-radial opacity-40 filter-blur-md pointer-events-none"
                  style={{
                    borderRadius,
                  }}
                />
                <span className="relative dark:text-black text-white-8 _outline-filter pointer-events-none">
                  {children}
                </span>
              </div>
            </motion.div>
          ) : (
            <>{children}</>
          )}
        </AnimatePresence>
      </>
    </Root>
  );
};
