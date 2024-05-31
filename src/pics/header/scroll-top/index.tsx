import type { FC } from "react";
import { resolvePresence } from "~/utils/animation";
import { IconsArrowsUp2 } from "~/components/icons/arrows/up2";
import { useScrollTopHandler } from "~/shell/ready/context/scroll/top";
import {
  PillBHover,
  TPillBHoverProps,
} from "~/components/buttons/pill/b/hover";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { useContextReady } from "~/shell/ready/context";

export const SCROLL_TOP_HOVER_KEY =
  "Go back";

export const PicsHeaderScrollTop: FC<
  Partial<TPillBHoverProps>
> = ({ ...props }) => {
  const handler = useScrollTopHandler();
  const { isIdle } = useContextReady();
  const title = SCROLL_TOP_HOVER_KEY;

  return (
    <PillBHover
      key={resolveCompositeKey(title)}
      title={title}
      isLabel={isIdle}
      subtitle="Return to the start of the page."
      onClick={handler}
      Icon={IconsArrowsUp2}
      {...resolvePresence(
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
      )}
      {...props}
    >
      {title}
    </PillBHover>
  );
};
