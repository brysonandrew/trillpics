import type { FC } from "react";
import clsx from "clsx";
import { SCROLLBAR_BORDER_WIDTH, SCROLLBAR_WIDTH } from "~uno/preflights";

export const ScrollbarSeam: FC = () => {
  return (
    <div
      style={{
        width: SCROLLBAR_BORDER_WIDTH,
        right: SCROLLBAR_WIDTH + SCROLLBAR_BORDER_WIDTH * 2,
      }}
      className={clsx(
        "fixed bg-white-05 dark:bg-black-4 h-screen top-0 bottom-0 pointer-events-none"
      )}
    />
  );
};
