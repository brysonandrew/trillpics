import { FC, memo } from "react";
import { motion } from "framer-motion";
import {
  Link,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { HOME_ROUTE } from "~/constants/params";
import { Title } from "~/pics/header/left/title";
import { useScrollTopHandler } from "~/shell/ready/context/scroll/top";
import { useTrillPicsStore } from "~/store/middleware";
import { useHoverKey } from "~/hooks/use-hover-key";

export const TITLE_HOVER_KEY = "Title";

export const HeaderLeft: FC = memo(
  () => {
    const [searchParams] =
      useSearchParams();

    const { pathname } = useLocation();
    const handler =
      useScrollTopHandler();
    const { isScroll } =
      useTrillPicsStore(
        ({ isScroll }) => ({
          isScroll,
        })
      );
    const isHome =
      pathname === HOME_ROUTE;

    const { motionHandlers } =
      useHoverKey();

    return (
      <motion.div
        className="relative -top-1 left-2 shrink-0 grow-0"
        {...motionHandlers(
          TITLE_HOVER_KEY
        )}
      >
        {isHome ? (
          <>
            {isScroll ? (
              <motion.button
                key="title"
                title={TITLE_HOVER_KEY}
                onClick={handler}
                {...motionHandlers(
                  TITLE_HOVER_KEY
                )}
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
            to={`${HOME_ROUTE}?${searchParams}`}
          >
            <Title />
          </Link>
        )}
      </motion.div>
    );
  }
);
