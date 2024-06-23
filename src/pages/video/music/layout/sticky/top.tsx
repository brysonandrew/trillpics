import type {
  FC,
  PropsWithChildren,
} from "react";
import { useAddRandomEffect } from "~/hooks/pic/add-random/effect";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";
import { boxRadius } from "~uno/rules/box/radius";

export const LayoutStickyTop: FC<
  PropsWithChildren
> = ({ children }) => {
  const { y, width } = useVideoStyle();
  const borderRadius = boxRadius();
  useAddRandomEffect();

  return (
    <div
      className="sticky column-stretch z-10 bg-black-8 dark:bg-black"
      style={{
        width: width + box.m025,
        top: y,
        borderTopRightRadius:
          borderRadius,
        borderTopLeftRadius:
          borderRadius,
      }}
    >
      {children}
    </div>
  );
};
