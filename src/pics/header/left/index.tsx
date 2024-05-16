import { FC, memo } from "react";
import { motion } from "framer-motion";
import {
  Link,
  useLocation,
} from "react-router-dom";
import { HOME_ROUTE } from "~/constants/params";
import { Title } from "~/pics/header/left/title";
import { useScrollTopHandler } from "~/context/scroll/top";
import { useTrillPicsStore } from "~/store/middleware";
import { useHoverKey } from "~/hooks/use-hover-key";
import { isDefined } from "~/utils/validation/is/defined";

export const HeaderLeft: FC = memo(
  () => {
    const { pathname } = useLocation();
    const { handler } =
      useScrollTopHandler();
    const { isScroll } =
      useTrillPicsStore(
        ({ isScroll }) => ({
          isScroll,
        })
      );
    const isHome =
      pathname === HOME_ROUTE;

    const title = "Go back";
    const { motionHandlers, isHover } =
      useHoverKey();
    const isHovering =
      isDefined<typeof title>(title) &&
      isHover(title);
    return (
      <div className="relative -top-1 left-2 shrink-0 grow-0">
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
        )}
      </div>
    );
  }
);
