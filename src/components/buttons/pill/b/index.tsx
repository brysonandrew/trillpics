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
import { resolveAccessibilityTitles } from "@brysonandrew/utils-attributes";
import { TFlatProps } from "~/types/ui";
import { FADE_PRESENCE_DELAY_02 } from "~/constants/animation";
import {
  boxSize,
  TBoxSizesKey,
} from "~uno/rules/box/size";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { isString } from "~/utils/validation/is/string";
import { ButtonPillBIcon } from "~/components/buttons/pill/b/icon";
import { BOX_SHADOW_FLAT } from "~uno/rules/box";
import { boxRadius } from "~uno/rules/box/radius";

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
      positionClass?: string;
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
  positionClass,
  ...props
}) => {
  const s = boxSize();
  const borderRadius = boxRadius();
  return (
    <Root
      key={resolveCompositeKey(
        "PillB",
        title
      )}
      {...resolveAccessibilityTitles(
        title
      )}
      disabled={disabled}
      className={clsx(
        positionClass ?? "relative",
        "shrink-0",
        "cursor-pointer",
        "disabled:(grayscale-100 brightness-60 opacity-80 cursor-not-allowed)",
        "hover:grayscale-100",
        classValue,
        direction === "ltr"
          ? "row"
          : "row-reverse"
      )}
      style={{
        ...(isFlat
          ? {
              boxShadow:
                BOX_SHADOW_FLAT,
            }
          : {}),
        gap: s.m05,
        height: s.m,
        borderRadius,
        ...style,
      }}
      {...props}
    >
      <>
        {isSelected && (
          <motion.div
            className="absolute bg-black pointer-events-none"
            style={{
              borderRadius,
              ...(direction === "ltr"
                ? { left: 0 }
                : { right: 0 }),
              top: 0,
              width: s.m,
              height: s.m,
            }}
            initial={{
              scale: 1,
              opacity: 0,
            }}
            animate={{
              scale: 1.075,
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
            title
          )}
          className={clsx(
            "center relative bg-white dark:bg-black pointer-events-none",
            isFlat
              ? ""
              : "_gradient-radial"
          )}
          style={{
            height: s.m,
            borderRadius,
            marginLeft: 0,
          }}
        >
          <ButtonPillBIcon
            isSelected={isSelected}
            Icon={Icon}
            outerCircle={outerCircle}
          />
        </motion.div>

        <AnimatePresence>
          {isString(children) ? (
            <motion.div
              key={`${title}`}
              className="relative top-2 px-0 text-left text-sm pointer-events-none"
              style={{
                height: s.height,
              }}
              {...FADE_PRESENCE_DELAY_02}
            >
              <div className="uppercase font-sans _outline-filter lg:(text-sm whitespace-nowrap) pointer-events-none">
                <div
                  className="absolute -inset-y-4 -inset-x-1 _gradient-radial opacity-10 filter-blur-md pointer-events-none"
                  style={{
                    borderRadius,
                  }}
                />
                <span className="relative dark:text-black text-white-8 _outline-filter whitespace-nowrap pointer-events-none">
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
