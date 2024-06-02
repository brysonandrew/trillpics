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
import { PillBLayout } from "~/components/buttons/pill/b/layout";

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
export const PillB: FC<TPillBProps> = (
  props
) => {
  const {
    Root = motion.button,
    title,
    classValue,
    isFlat,
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
      <PillBLayout {...props} />
    </Root>
  );
};
