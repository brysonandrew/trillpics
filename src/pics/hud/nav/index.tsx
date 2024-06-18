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
import { NavCountersPics } from "~/pics/hud/nav/counters/pics";
import { NavCountersMusic } from "~/pics/hud/nav/counters/music";
import { NavCountersSelectedMusic } from "~/pics/hud/nav/counters/selected/music";
import { NavCountersSelectedPics } from "~/pics/hud/nav/counters/selected/pics";

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
  // const x = useTransform(main.dragger.navX,v => Math.sin(((v%navItemGap)/navItemGap) * Math.PI/2) * navItemGap/2);


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
                        "row relative center z-10 pointer-events-none"
                      )}
                      style={{
                        width: s.m,
                        height: s.m,
                        gap: s.m025,
                        filter:"grayscale(100%)",
                        // originX: "50%",
                        // originY: "50%",
                      }}
                      initial={{
                        scale: 1,
                      }}
                      animate={{
                        scale: 1.075,
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
                      {title ===
                        "Music Sequencer" && (
                        <NavCountersSelectedMusic />
                      )}
                      {title ===
                        "Video Sequencer" && (
                        <NavCountersSelectedPics />
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
                      "flex relative",
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
                        "relative inline-flex items-center dark:bg-black-02 bg-white-02 backdrop-blur-lg",
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
                      {title ===
                        "Music Sequencer" && (
                        <NavCountersMusic />
                      )}
                      {title ===
                        "Video Sequencer" && (
                        <NavCountersPics />
                      )}
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
