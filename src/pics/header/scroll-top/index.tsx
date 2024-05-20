import type { FC } from "react";
import { resolvePresence } from "~/utils/animation";
import { IconsArrowsUp2 } from "~/components/icons/arrows/up2";
import { useScrollTopHandler } from "~/context/scroll/top";
import { useReady } from "~/hooks/use-ready";
import {
  PillBHover,
  TPillBHoverProps,
} from "~/components/buttons/pill/b/hover";
import { resolveCompositeKey } from "@brysonandrew/utils-key";

export const SCROLL_TOP_HOVER_KEY =
  "Go back";

export const PicsHeaderScrollTop: FC<
  Partial<TPillBHoverProps>
> = ({  ...props }) => {
  const handler = useScrollTopHandler();

  const isReady = useReady();
  const title = SCROLL_TOP_HOVER_KEY;

  return (
    <PillBHover
      key={resolveCompositeKey(
        "scroll-top",
        title,
        `${isReady}`
      )}
      title={title}
      subtitle="Return to the start of the page."
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
      {...props}
    >
      {title}
    </PillBHover>
  );
};
