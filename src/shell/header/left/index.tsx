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
import { HOME_ROUTE } from "~/constants/routes";
import { Title } from "~/shell/header/left/title";
import { ScrollTop } from "~/shell/header/left/controls/scroll-top";
import { useVirtualizeScrollTopHandler } from "~/shell/header/left/controls/scroll-top/use-scroll-top-handler";
import { IconsArrowsUp2 } from "~/components/icons/arrows/up2";
import { resolvePresence } from "~/utils/animation";

export const HeaderLeft: FC = () => {
  const { pathname } = useLocation();
  const { handler, isScroll, scroll } =
    useVirtualizeScrollTopHandler();

  const isHome =
    pathname === HOME_ROUTE;

  const title = "Go back";
  return (
    <div className="column-start gap-4 h-0">
      <motion.div
        style={{ scale: scroll.y }}
        className="relative shrink-0 origin-top-left"
      >
        {isHome ? (
          <>
            {isScroll ? (
              <button
                key="title"
                onClick={handler}
              >
                <Title />
              </button>
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
        )}
      </motion.div>
      <div className="column-start gap-4 relative shrink-0">
        <ControlsShuffle />
        <AnimatePresence>
          {isScroll && (
            <ScrollTop
              key={title}
              title={title}
              onClick={handler}
              Icon={IconsArrowsUp2}
              {...resolvePresence(
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0 }
              )}
            >
              {title}
            </ScrollTop>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
