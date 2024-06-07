import { FC, useEffect } from "react";
import {
  animate,
  motion,
} from "framer-motion";
import { TDimensions } from "@brysonandrew/config-types";
import { boxSize } from "~uno/rules/box/size";
import { boxRadius } from "~uno/rules/box/radius";
import { NAV_ITEMS } from "~/pics/hud/nav/constants";
import { useLocation } from "react-router-dom";
import { useHoverKey } from "~/hooks/use-hover-key";
import { FooterNavLink } from "~/pics/hud/nav/link";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { PillBLayout } from "~/components/buttons/pill/b/layout";
import clsx from "clsx";
import { PillBText } from "~/components/buttons/pill/b/text";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { useInitContext } from "~/shell/init/context";
import { AURA } from "@brysonandrew/svg-filter";

type TProps = {
  container: TDimensions;
};
export const PicsHudFooterNav: FC<
  TProps
> = ({ container }) => {
  const { pathname } = useLocation();
  const { main } = useInitContext();
  const navItemWidth =
    container.width / 3;
  useEffect(() => {
    const index = NAV_ITEMS.findIndex(
      ([_, path]) => path === pathname
    );
    animate(
      main.dragger.navX,
      -(navItemWidth + s.m05 - s.m0125) * index,
      { ease: "easeOut" }
    );
  }, [pathname]);

  const s = boxSize();
  const borderRadius = boxRadius();
  const { handlers } = useHoverKey();

  return (
    <motion.nav
      className="relative py-0 border dark:border-black-05 border-white-05"
      style={{
        top: container.height - s.m,
        left:
          container.width / 2 -
          s.m05 -
          s.m025,
        width:
          navItemWidth *
          NAV_ITEMS.length,
        borderRadius,
        padding: s.m025,
        // backdropFilter:
        //   AURA.GLOBAL.value, // DUO_TONE_PROPS.filter ,// "blur(20px 0px)",
        x: main.dragger.navX,
      }}
      {...handlers("nav")}
    >
      <div
        className="fill dark:bg-black bg-black opacity-10"
        style={{
          borderRadius,
          backdropFilter: "blur(4px)",
        }}
      />

      <ul className="row-space w-full">
        {NAV_ITEMS.map(
          (
            [Icon, to, title],
            index,
            arr
          ) => {
            const selectedIndex =
              arr.findIndex(
                ([_, to]) =>
                  to === pathname
              );
            const isSelected =
              selectedIndex === index;

            if (isSelected)
              return (
                <li
                  key={resolveCompositeKey(
                    "selected",
                    title
                  )}
                  className="relative flex flex-row items-center pr-4 gap-2 z-10"
                >
                  <motion.div
                    className="absolute inset-0 border bg-white-02 dark:bg-black-02 border-white-02 dark:border-black-02"
                    layoutId="selected-border"
                    style={{
                      borderRadius,
                    }}
                  />
                  <PillBLayout
                    Icon={Icon}
                  />
                  <PillBText
                    layoutId={title}
                  >
                    {title}
                  </PillBText>
                </li>
              );

            const isPrev =
              selectedIndex > index;
            const isNext =
              selectedIndex < index;
            return (
              <li
                key={resolveCompositeKey(
                  title,
                  isPrev
                    ? "prev"
                    : null,
                  isNext ? "next" : null
                )}
                className="relative grow z-0"
                style={{
                  width: navItemWidth,
                }}
              >
                <FooterNavLink
                  to={to}
                  title={title}
                  classValue={clsx(
                    "flex items-center gap-2 grow",
                    isNext
                      ? "flex-row-reverse"
                      : "flex-row"
                  )}
                >
                  <PillBLayout
                    Icon={Icon}
                  />
                  <PillBText
                    {...(isNext
                      ? {
                          layoutId:
                            title,
                        }
                      : {})}
                  >
                    {title}
                  </PillBText>
                  <LinesHorizontal />
                </FooterNavLink>
              </li>
            );
          }
        )}
      </ul>
    </motion.nav>
  );
};
