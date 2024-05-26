import type { FC } from "react";
import clsx from "clsx";
import { LinesVertical } from "~/components/lines/vertical";
import { TCommonProps } from "~/pages/video/_root/reorder/types";
import { MAX_COUNT } from "~/pages/video/_root/reorder/constants";
import { LinesHorizontal1 } from "~/components/lines/horizontal/1";

type TProps = TCommonProps;
export const _CommonReorderPlaceholder: FC<
  TProps
> = ({ itemProps, boxProps }) => {
  const gap = boxProps.style?.gap ?? 0;
  return (
    <div
      className="absolute"
      {...boxProps}
    >
      <LinesHorizontal1
        style={{
          top:
            itemProps.style.height /
              2 ?? 0,
        }}
      />

      <ul className="absolute row w-full left-0 top-0">
        {[...Array(MAX_COUNT)].map(
          (_, index) => (
            <li
              key={`${index}`}
              className={clsx(
                "relative",
                "border border-white-02 dark:border-black-02 bg-white-01 dark:bg-black-01 backdrop-blur-sm opacity-50"
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
    </div>
  );
};
