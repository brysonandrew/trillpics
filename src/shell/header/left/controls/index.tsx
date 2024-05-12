import type { FC } from "react";
import { AnimatePresence } from "framer-motion";
import { IconsArrowsUp2 } from "~/components/icons/arrows/up2";
import { useScrollTopHandler } from "~/context/scroll/top";
import { ScrollTop } from "~/shell/header/left/controls/scroll-top";
import { ControlsShuffle } from "~/shell/header/left/controls/shuffle";
import { useTrillPicsStore } from "~/store/middleware";
import { resolvePresence } from "~/utils/animation";
import { useReady } from "~/hooks/use-ready";

export const HeaderLeftControls: FC = () => {
  const { handler } =
    useScrollTopHandler();
  const { isScroll } =
    useTrillPicsStore(
      ({ isScroll }) => ({
        isScroll,
      })
    );
  const isReady = useReady();
  const title = "Go back";

  return (
    <div className="column-start gap-4 relative shrink-0">
      <AnimatePresence>
        <ControlsShuffle key="ControlsShuffle" />
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
                  {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.2,
                    },
                  }
                )
              : {})}
          >
            {title}
          </ScrollTop>
        )}
      </AnimatePresence>
    </div>
  );
};
