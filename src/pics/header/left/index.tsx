import { FC, memo } from "react";
import { motion } from "framer-motion";
import {
  Link,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { HOME_ROUTE } from "~/constants/params";
import { Title } from "~/pics/header/left/title";
import { useScrollTopHandler } from "~/context/scroll/top";
import { useTrillPicsStore } from "~/store/middleware";
import { useHoverKey } from "~/hooks/use-hover-key";

export const TITLE_HOVER_KEY = 'Title'

export const HeaderLeft: FC = memo(
  () => {
    const [searchParams] =
      useSearchParams();

    const { pathname } = useLocation();
    const handler =
      useScrollTopHandler();
    const { isScroll, isIdle, set } =
      useTrillPicsStore(
        ({
          isScroll,
          isIdle,
          set,
        }) => ({
          isScroll,
          isIdle,
          set,
        })
      );
    const isHome =
      pathname === HOME_ROUTE;
    const handleHoverStart = () => {
      set({ isIdle: true });
    };
    const title = TITLE_HOVER_KEY;
    const { motionHandlers } =
      useHoverKey({
        handlers: {
          start: handleHoverStart,
        },
      });

    return (
      <motion.div
        className="relative -top-1 left-2 shrink-0 grow-0"
        {...motionHandlers(title)}
      >
        {isHome ? (
          <>
            {isScroll ? (
              <motion.button
                key="title"
                title={title}
                onClick={handler}
                {...motionHandlers(
                  title
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
