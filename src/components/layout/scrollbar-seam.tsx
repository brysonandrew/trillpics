import clsx from "clsx";
import type { FC } from "react";
import { SCROLLBAR_WIDTH } from "~uno/preflights";
import { SHORTCUTS_BOX_GRADIENT } from "~uno/shortcuts/box/gradient";

export const ScrollbarSeam: FC = () => {
  return (
    <div
      style={{
        width: SCROLLBAR_WIDTH,
        zIndex: 99999,
        opacity: 0.5,
        backdropFilter: "blur(14px)",

      }}
      className={clsx(SHORTCUTS_BOX_GRADIENT["_gradient-radial"], "fixed h-screen w-[14px] top-0 bottom-0 right-0 border-black pointer-events-none")}
    />
  );
};
