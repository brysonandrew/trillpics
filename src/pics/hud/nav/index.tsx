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

type TProps = {
  container: TDimensions;
};
export const PicsHudFooterNav: FC<
  TProps
> = ({ container }) => {
  const s = boxSize();
  const { pathname } = useLocation();
  const { main } = useInitContext();
  const navItemGap =
    container.width / 2;
  useEffect(() => {
    const index = NAV_ITEMS.findIndex(
      ([_, path]) => path === pathname
    );
    animate(
      main.dragger.navX,
      -navItemGap * index,
      { ease: "easeOut" }
    );
  }, [pathname]);

  const borderRadius = boxRadius();
  const { handlers } = useHoverKey();
  const width =
    (navItemGap + s.m / 3) * 3;
  return (
    <motion.nav
      className={clsx(
        "relative py-0"
        // "border dark:border-black-02 border-white-02"
      )}
      style={{
        top: container.height - s.m,
        left:
          container.width / 2 - s.m05,
        width,
        borderRadius,
        // padding: s.m0125,
        x: main.dragger.navX,
      }}
      {...handlers("nav")}
    >
      {/* <div
        className="absolute top-3/4 w-full h-px dark:bg-white bg-black opacity-20"
        style={{
          borderRadius,
          backdropFilter: "blur(4px)",
        }}
      /> */}

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
                  className={clsx(
                    "relative row z-10"
                  )}
                  style={{
                    width: s.m,
                    height: s.m,
                    gap: s.m025,
                  }}
                >
                  <PillBLayout
                    Icon={Icon}
                  />
                  <PillBText
                    {...(true
                      ? {
                          layoutId:
                            title,
                        }
                      : {})}
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
                className={clsx(
                  "flex relative z-0",
                  isNext
                    ? "justify-end"
                    : "justify-start"
                )}
                style={{
                  width: s.m,
                }}
              >
                <FooterNavLink
                  to={to}
                  title={title}
                  classValue={clsx(
                    "inline-flex items-center dark:bg-black-02 bg-white-02",
                    isNext
                      ? "flex-row-reverse pl-4"
                      : "flex-row pr-4"
                  )}
                  style={{
                    borderRadius,
                    gap: s.m025,
                  }}
                >
                  <PillBLayout
                    Icon={Icon}
                  />
                  <PillBText
                    {...(true
                      ? {
                          layoutId:
                            title,
                        }
                      : {})}
                  >
                    {title}
                  </PillBText>
                </FooterNavLink>
              </li>
            );
          }
        )}
      </ul>
    </motion.nav>
  );
};
