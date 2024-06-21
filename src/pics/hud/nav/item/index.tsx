import type { FC } from "react";
import {
  HTMLMotionProps,
  motion,
} from "framer-motion";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import clsx from "clsx";
import { PillBLayout } from "~/components/buttons/pill/b/layout";
import { PillBText } from "~/components/buttons/pill/b/text";
import { NavCountersMusic } from "~/pics/hud/nav/counters/music";
import { NavCountersPics } from "~/pics/hud/nav/counters/pics";
import { FooterNavLink } from "~/pics/hud/nav/item/link";
import { TClassValueProps } from "@brysonandrew/config-types";
import { boxRadius } from "~uno/rules/box/radius";
import { boxSize } from "~uno/rules/box/size";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { PAGE_TITLES } from "~/pics/hud/nav/constants";
import { useHoverKey } from "~/hooks/use-hover-key";

type TProps = HTMLMotionProps<"li"> &
  TClassValueProps & {
    isRtl: boolean;
    deltaFromSelected: number;
    to: string;
    Icon: FC;
    title: string;
  };
export const FooterNavItem: FC<
  TProps
> = ({
  isRtl,
  to,
  title,
  Icon,
  style,
  ...props
}) => {
  const s = boxSize();
  const borderRadius = boxRadius();
  const { isHover } = useHoverKey();
  const isHovering = isHover(title);
  return (
    <motion.li
      key={resolveCompositeKey(title)}
      className={clsx(
        "flex relative",
        isRtl
          ? "justify-end"
          : "justify-start"
      )}
      style={{
        width: s.m,
        ...style,
      }}
      {...PRESENCE_OPACITY}
      {...props}
    >
      <FooterNavLink
        to={to}
        title={title}
        classValue={clsx(
          "relative",
          "inline-flex items-center dark:bg-black-02 bg-white-02 backdrop-blur-lg",
          isRtl
            ? clsx(
                "flex-row-reverse right-0",
                isHovering && "pl-4"
              )
            : clsx(
                "flex-row left-0",
                isHovering && "pr-4"
              )
        )}
        style={{
          borderRadius,
          gap: s.m025,
        }}
      >
        <PillBLayout Icon={Icon} />

        {isHovering && (
          <>
            <PillBText
            // layoutId={title} {...PRESENCE_OPACITY}
            >
              {title}
            </PillBText>
          </>
        )}

        {title ===
          PAGE_TITLES["Song Pics"] && (
          <NavCountersMusic />
        )}
        {title ===
          PAGE_TITLES["Video Pics"] && (
          <NavCountersPics />
        )}
      </FooterNavLink>
    </motion.li>
  );
};
