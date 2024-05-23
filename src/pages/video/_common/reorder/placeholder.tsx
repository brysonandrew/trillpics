import type { FC } from "react";
import clsx from "clsx";
import { LinesVertical } from "~/pages/video/_common/footer/left/lines/vertical";
import { TCommonProps } from "~/pages/video/_common/reorder/types";
import { MAX_COUNT } from "~/pages/video/_common/reorder/constants";

type TProps = TCommonProps;
export const _CommonReorderPlaceholder: FC<
  TProps
> = ({ itemProps, boxProps }) => {
  const gap = boxProps.style?.gap ?? 0;
  return (
    <ul {...boxProps}>
      {[...Array(MAX_COUNT)].map(
        (_, index) => (
          <li
            key={`${index}`}
            className={clsx(
              "relative",
              "border border-white dark:border-black bg-white-01 dark:bg-black-01 backdrop-blur-sm"
            )}
            {...itemProps}
          >
            {index !== 0 && (
              <LinesVertical
                style={{
                  left: -gap / 2 - 1,
                }}
              />
            )}
          </li>
        )
      )}
    </ul>
  );
};
