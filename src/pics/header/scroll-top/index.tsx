import type { FC } from "react";
import { AnimatePresence } from "framer-motion";
import { resolvePresence } from "~/utils/animation";
import { IconsArrowsUp2 } from "~/components/icons/arrows/up2";
import { useScrollTopHandler } from "~/context/scroll/top";
import { useTrillPicsStore } from "~/store/middleware";
import { useReady } from "~/hooks/use-ready";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { LinesVertical } from "~/pages/video/_common/footer/nav/lines/vertical";

export const PicsHeaderScrollTop: FC =
  () => {
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
      <AnimatePresence>
        {isScroll && (
          <>
            <LinesVertical classValue="flex opacity-50" />

            <PillBHover
              key={resolveCompositeKey(
                "scroll-top",
                title,
                `${isReady}`
              )}
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
            </PillBHover>
          </>
        )}
      </AnimatePresence>
    );
  };
