import { FC, useEffect } from "react";
import {
  animate,
  AnimatePresence,
  motion,
  MotionConfig,
} from "framer-motion";
import { boxSize } from "~uno/rules/box/size";
import { boxRadius } from "~uno/rules/box/radius";
import { NAV_ITEMS } from "~/pics/hud/nav/constants";
import { useLocation } from "react-router-dom";
import { useHoverKey } from "~/hooks/use-hover-key";
import { FooterNavLink } from "~/pics/hud/nav/link";
import { PillBLayout } from "~/components/buttons/pill/b/layout";
import clsx from "clsx";
import { PillBText } from "~/components/buttons/pill/b/text";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { useInitContext } from "~/shell/init/context";
import { THudContainer } from "~/pics/hud";

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
  const s = boxSize();
  const { pathname } = useLocation();
  const { main } = useInitContext();
  const navItemGap =
    container.width / 2;
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
    (navItemGap + s.m / 3) * 3;
  return (
    <MotionConfig transition={SPRING}>
      <motion.nav
        className={clsx(
          "relative py-0 h-0"
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
                    <motion.li
                      key={resolveCompositeKey(
                        "selected",
                        title
                      )}
                      className={clsx(
                        "relative center z-10 pointer-events-none opacity-50"
                      )}
                      style={{
                        width: s.m,
                        height: s.m,
                        gap: s.m025,
                        // originX: "50%",
                        // originY: "50%",
                      }}
                      initial={{
                        scale: 1,
                      }}
                      animate={{
                        scale: 1.4,
                      }}
                      exit={{
                        scale: 1,
                      }}
                    >
                      <Icon />
                      {!container.isTablet && (
                        <PillBText
                          layoutId={
                            title
                          }
                        >
                          {title}
                        </PillBText>
                      )}
                    </motion.li>
                  );

                const isNext =
                  selectedIndex < index;
                return (
                  <motion.li
                    key={resolveCompositeKey(
                      title
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
                        layoutId={title}
                      >
                        {title}
                      </PillBText>
                    </FooterNavLink>
                  </motion.li>
                );
              }
            )}
          </ul>
        </AnimatePresence>
      </motion.nav>
    </MotionConfig>
  );
};
