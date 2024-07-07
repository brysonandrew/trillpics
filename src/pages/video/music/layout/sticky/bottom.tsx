import type {
  FC,
  PropsWithChildren,
} from "react";
import { useAddRandomEffect } from "~/hooks/pic/add-random/effect";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";
import { boxRadius } from "~uno/rules/box/radius";

export const LayoutStickyBottom: FC<
  PropsWithChildren
> = ({ children }) => {
  const { y, gap, width, beatsTop } =
    useVideoStyle();
  const borderRadius = boxRadius();
  useAddRandomEffect();

  return (
    <div
      className="sticky column-stretch bg-black-8 dark:bg-black z-10"
      style={{
        top:
          beatsTop + box._4 - box._0125,
        gap: box._0125,
        width: width + box._025,
        bottom: 0,
        borderBottomLeftRadius:
          borderRadius,
        borderBottomRightRadius:
          borderRadius,
      }}
    >
      {children}
    </div>
  );
};
