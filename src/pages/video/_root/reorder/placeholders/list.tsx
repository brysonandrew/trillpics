import type { FC } from "react";
import clsx from "clsx";
import { TCommonProps } from "~/pages/video/_root/reorder/types";
import { MAX_COUNT } from "~/pages/video/_root/reorder/constants";
import { boxRadius } from "~uno/rules/box/radius";
import { boxSize } from "~uno/rules/box/size";

type TProps = TCommonProps;
export const _RootReorderPlaceholdersList: FC<
  TProps
> = ({
  itemDimensions,
  boxProps,
  isColumn,
}) => {
  const s = boxSize();
  const borderRadius = boxRadius();
  return (
    <ul
      className={clsx(
        "absolute left-0 top-0 w-full z-0",
        isColumn ? "column" : "row"
      )}
      style={{
        // x,
        // y,
        gap: boxProps.style?.gap,
      }}
    >
      {[...Array(MAX_COUNT)].map(
        (_, index) => (
          <li
            key={`${index}`}
            className={clsx(
              "relative",
              "border border-white-02 dark:border-black-02 bg-white-01 dark:bg-black-01 backdrop-blur-sm opacity-50"
            )}
            style={{
              width:
                itemDimensions.width,
              height:
                itemDimensions.height, /// s.m+s.m025,

              top: 0,
              borderRadius:
                borderRadius / 2,
              padding: s.padding,
              zIndex: index * 2 + 2,
            }}
          ></li>
        )
      )}
    </ul>
  );
};
