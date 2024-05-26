import type { FC } from "react";
import clsx from "clsx";
import { LinesVertical } from "~/components/lines/vertical";
import { TCommonProps } from "~/pages/video/_root/reorder/types";
import { MAX_COUNT } from "~/pages/video/_root/reorder/constants";
import { LinesHorizontal1 } from "~/components/lines/horizontal/1";
import { boxRadius } from "~/constants/box/radius";
import { boxSize } from "~/constants/box/size";

type TProps = TCommonProps;
export const _CommonReorderPlaceholder: FC<
  TProps
> = ({ itemProps, boxProps }) => {
  const gap = boxProps.style?.gap ?? 0;
  const s = boxSize();
  const borderRadius = boxRadius();
  return (
    <div
      className="absolute"
      {...boxProps}
    >
      {/* <LinesHorizontal1
        style={{
          top:
            itemProps.style.height /
              2 ?? 0,
        }}
      /> */}

      <ul
        className={clsx(
          "absolute row left-0 top-0 w-full"
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
                  itemProps.style.width,
                height: itemProps.style.height,/// s.m+s.m025,

                top: 0,
                borderRadius:borderRadius/2,
                padding: s.padding,
              }}
            >
          
            </li>
          )
        )}
      </ul>
    </div>
  );
};
