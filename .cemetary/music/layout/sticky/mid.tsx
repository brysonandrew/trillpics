import type { FC, PropsWithChildren } from "react";
import { useAddRandomEffect } from "~/hooks/pic/add-random/effect";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";
import { boxRadius } from "~uno/rules/box/radius";

export const LayoutStickyMid: FC<PropsWithChildren> = ({children}) => {
  const { y, gap, width, beatsTop } =
  useVideoStyle();
const borderRadius = boxRadius();
useAddRandomEffect();

  return (
    <div
    className="sticky column-stretch z-10 bg-black-8 dark:bg-black"
    style={{
      width:
        width + box._025,
      top:
        beatsTop + box._025,
      bottom: -box._,
    }}
  >
      {children}
    </div>
  );
};