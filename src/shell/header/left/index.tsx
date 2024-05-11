import { FC } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { ControlsShuffle } from "~/shell/header/left/controls/shuffle";
import {
  Link,
  useLocation,
} from "react-router-dom";
import { HOME_ROUTE } from "~/constants/params";
import { Title } from "~/shell/header/left/title";
import { ScrollTop } from "~/shell/header/left/controls/scroll-top";
import { useScrollTopHandler } from "~/context/scroll/top";
import { IconsArrowsUp2 } from "~/components/icons/arrows/up2";
import { resolvePresence } from "~/utils/animation";
import { useTrillPicsStore } from "~/store/middleware";
import { useReady } from "~/hooks/use-ready";
import { useHoverKey } from "~/hooks/use-hover-key";
import { isDefined } from "~/utils/validation/is/defined";

export const HeaderLeft: FC = () => {
  const { pathname } = useLocation();
  const { handler } =
    useScrollTopHandler();
  const { isScroll } =
    useTrillPicsStore(
      ({ isScroll }) => ({
        isScroll,
      })
    );
  const isReady = useReady();
  const isHome =
    pathname === HOME_ROUTE;

  const title = "Go back";
  const { motionHandlers, isHover } =
    useHoverKey();
  const isHovering =
    isDefined<typeof title>(title) &&
    isHover(title);
  return (
    <div className="column-start gap-4 h-0">
      <motion.div className="relative shrink-0 origin-top-left">
        {isHome ? (
          <>
            {isScroll ? (
              <motion.button
                key="title"
                {...motionHandlers(
                  title
                )}
                onClick={handler}
              >
                <Title />
              </motion.button>
            ) : (
              <Title key="title" />
            )}
          </>
        ) : (
          <Link
            className="relative"
            to={HOME_ROUTE}
          >
            <Title />
          </Link>
          // <ScrollTop
          //     key={`ScrollTop ${title}`}
          //     title={title}
          //     onClick={handler}
          //     Icon={Title}
          //     {...(isReady
          //       ? resolvePresence(
          //           {
          //             opacity: 0,
          //             y: 10,
          //           },
          //           { opacity: 1, y: 0 }
          //         )
          //       : {})}
          //   />
        )}
      </motion.div>
      <div className="column-start gap-4 relative shrink-0">
        <AnimatePresence>
          {isScroll && (
            <ScrollTop
              key={`ScrollTop ${title}`}
              title={title}
              onClick={handler}
              Icon={IconsArrowsUp2}
              {...(isReady
                ? resolvePresence(
                    {
                      opacity: 0,
                      y: 10,
                    },
                    { opacity: 1, y: 0, transition: {delay: 0.2} }
                  )
                : {})}
            >
              {title}
            </ScrollTop>
          )}
          <ControlsShuffle key="ControlsShuffle" />
        </AnimatePresence>
      </div>
    </div>
  );
};
