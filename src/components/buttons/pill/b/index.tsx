import {
  FC,
  Fragment,
  ReactNode,
} from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import clsx from "clsx";
import {
  TButtonMotionProps,
  TPropsWithChildren,
  TSvgProps,
} from "@brysonandrew/config-types";
import { TCircleProps } from "~/components/layout/circle/circle";
import { resolveAccessibilityTitles } from "@brysonandrew/utils-attributes";
import { TFlatProps } from "~/types/ui";
import { boxSize } from "~uno/rules/box/size";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { boxRadius } from "~uno/rules/box/radius";
import { PillBLayout } from "~/components/buttons/pill/b/layout";
import { TIconsSvgProps } from "@brysonandrew/svg-icon";
import { PillBText } from "~/components/buttons/pill/b/text";
import { isString } from "~/utils/validation/is/string";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";

type TXDirection = "ltr" | "rtl";
export type TPillBProps =
  TPropsWithChildren<
    Omit<
      TButtonMotionProps,
      "children"
    > &
      TFlatProps & {
        Root?: FC<TButtonMotionProps>;
        Icon: FC<TIconsSvgProps> | null;
        iconProps?: TSvgProps;
        circleProps?: TCircleProps;
        outerCircle?: ReactNode;
        isSelected?: boolean;
        direction?: TXDirection;
        positionClass?: string;
      }
  >;
export const PillB: FC<TPillBProps> = (
  props
) => {
  const {
    Root = motion.button,
    title,
    classValue,
    style,
    direction = "ltr",
    disabled,
    positionClass,
    children,
  } = props;
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
        "hover:brightness-120",
        classValue,
        direction === "ltr"
          ? "row"
          : "row-reverse"
      )}
      style={{
        gap: s.m,
        height: s.m,
        borderRadius,
        ...style,
      }}
      {...props}
    >
      <PillBLayout {...props} />
      <AnimatePresence>
        {children && (
          <Fragment
            key={resolveCompositeKey(
              "pill-b-children",
              title
            )}
          >
            <div
              style={{
                padding: s.m0125,
              }}
            />
            {isString(children) ? (
              <PillBText
                {...PRESENCE_OPACITY}
              >
                {children}
              </PillBText>
            ) : (
              <>{children}</>
            )}
          </Fragment>
        )}
      </AnimatePresence>
    </Root>
  );
};
