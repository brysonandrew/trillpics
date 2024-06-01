import {
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import {
  animate,
  ValueAnimationTransition,
} from "framer-motion";
import { FixedSizeList } from "react-window";
import { Row } from "~/pics/grid/row";
import {
  TPartialFixedTableProps,
  TPicsRows,
} from "~/store/state/table/types";
import { TDimensions } from "@brysonandrew/config-types";
import {
  Inner,
  TInnerHandle,
} from "~/pics/grid/inner";
import {
  Outer,
  TOuterHandle,
} from "~/pics/grid/outer";
import {
  TGridHandle,
  TGrid,
} from "~/shell/ready/context/types";
import { TTableUpdateCountResult } from "~/store/state/table/update/count";

type TProps = TPartialFixedTableProps &
  TDimensions & {
    rows: TPicsRows;
    size: number;
    count: TTableUpdateCountResult;
  };
export const Grid = forwardRef<
  TGridHandle,
  TProps
>(
  (
    {
      size,
      rows,
      count,
      ...props
    }: TProps,
    handleRef
  ) => {
    const outerHandle =
      useRef<TOuterHandle | null>(null);
    const innerHandle =
      useRef<TInnerHandle | null>(null);
    const sourceRef =
      useRef<TGrid | null>(null);

    useImperativeHandle(
      handleRef,
      () => {
        return {
          disableScroll: () =>
            outerHandle.current?.disableScroll(),
          enableScroll: () =>
            outerHandle.current?.enableScroll(),
          scrollTop: (
            animateOptions: Partial<
              ValueAnimationTransition<number>
            > = {}
          ) => {
            if (sourceRef.current) {
              const distance =
                sourceRef.current.state
                  .scrollOffset;
              animate(distance, 0, {
                onUpdate: (latest) => {
                  outerHandle.current?.scrollTo(
                    latest
                  );
                },
                ...animateOptions,
              });
              // sourceRef.current.scrollTo(
              //   0
              // );
            }
          },
          scrollToRandom: () => {
            if (sourceRef.current) {
              const randomColIndex = ~~(
                Math.random() *
                count.columns
              );
              const randomRowIndex = ~~(
                Math.random() *
                count.rows
              );
              sourceRef.current.scrollToItem(
                randomRowIndex
              );
              return {
                column: randomColIndex,
                row: randomRowIndex,
              };
            }
          },
          isHovering: () => {
            if (
              innerHandle.current?.isHovering()
            )
              return true;
            return false;
          },
          isScrolling: () => {
            if (
              sourceRef.current?.state
                .isScrolling
            )
              return true;
            return false;
          },
        };
      },
      []
    );
    return (
      <FixedSizeList<TPicsRows>
        itemCount={rows.length}
        itemData={rows}
        itemSize={size}
        itemKey={(
          index: number,
          data: TPicsRows
        ) => {
          const key =
            data[index].columns.join(
              "-"
            );
          return key;
        }}
        layout="vertical"
        direction="ltr"
        ref={(instance) => {
          if (
            instance &&
            !sourceRef.current
          ) {
            sourceRef.current =
              instance as TGrid;
          }
        }}
        innerElementType={Inner}
        outerElementType={Outer}
        innerRef={innerHandle}
        outerRef={outerHandle}
        overscanCount={3}
        {...props}
      >
        {Row}
      </FixedSizeList>
    );
  }
);
