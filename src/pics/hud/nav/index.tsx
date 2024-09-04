import { FC, useEffect } from "react";
import {
  animate,
  AnimatePresence,
  motion,
  MotionConfig,
} from "framer-motion";
import { box } from "~uno/rules/box";
import { boxRadius } from "~uno/rules/box/radius";
import { NAV_ITEMS } from "~/pics/hud/nav/constants";
import { useLocation } from "react-router-dom";
import { useHoverKey } from "~/hooks/use-hover-key";
import clsx from "clsx";
import { useContextInit } from "~/shell/init/context";
import { THudContainer } from "~/pics/hud";
import { FooterNavItem } from "~/pics/hud/nav/item";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { NavItemGlow } from "~/pics/hud/nav/glow";

const SPRING = {
  type: "spring",
  stiffness: 240,
  damping: 60,
  bounce: 10,
  restDelta: 0.001,
  // duration: 2
} as const;

type TProps = {
  container: THudContainer;
};
export const PicsHudFooterNav: FC<
  TProps
> = ({ container }) => {
  
  const { pathname } = useLocation();
  const { main } = useContextInit();
  const navItemGap =
    container.width / 2 - box._;
  useEffect(() => {
    const index = NAV_ITEMS.findIndex(
      ([_, path]) => path === pathname
    );
    animate<number>(
      main.dragger.navX,
      -navItemGap * index,
      SPRING
    );
  }, [pathname]);
  const borderRadius = boxRadius();
  const { handlers } = useHoverKey();
  const width =
    (navItemGap + box._ / 3) * 3;
  return (
    <MotionConfig transition={SPRING}>
      <motion.nav
        className={clsx(
          "relative py-0 h-0"
        )}
        style={{
          top: container.height - box._,
          left:
            container.width / 2 - box._15,
          width: width + box._2,
          borderRadius,
          x: main.dragger.navX,
        }}
        {...handlers(
          "PicsHudFooterNav"
        )}
      >
        <AnimatePresence>
          <ul className="row-space w-full h-0">
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
                  selectedIndex ===
                  index;

                if (isSelected)
                  return (
                    <div
                      key={resolveCompositeKey(
                        "selected",
                        title
                      )}
                      style={{
                        width: box._,
                        height: box._,
                      }}
                    />
                  );
                const deltaFromSelected =
                  Math.abs(
                    selectedIndex -
                      index
                  );

                const isRtl =
                  selectedIndex < index;
                return (
                  <FooterNavItem
                    key={to}
                    to={to}
                    Icon={Icon}
                    isRtl={isRtl}
                    deltaFromSelected={
                      deltaFromSelected
                    }
                    style={
                      deltaFromSelected >
                      0
                        ? {
                            [isRtl
                              ? "right"
                              : "left"]:
                              navItemGap *
                                (deltaFromSelected -
                                  1) -
                              0 *
                                deltaFromSelected,
                            bottom:
                              box._15 *
                              (deltaFromSelected -
                                1),
                          }
                        : {}
                    }
                    title={title}
                  />
                );
              }
            )}
          </ul>
        </AnimatePresence>
      </motion.nav>
    </MotionConfig>
  );
};
