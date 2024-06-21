import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
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
        direction?: "ltr" | "rtl";
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
        gap: s.m05,
        height: s.m,
        borderRadius,
        ...style,
      }}
      {...props}
    >
      <PillBLayout {...props} />
    </Root>
  );
};
