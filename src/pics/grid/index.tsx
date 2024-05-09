import {
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
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
  TOuterHandle,
  Outer,
} from "~/pics/grid/outer";
import {
  TGridHandle,
  TGrid,
} from "~/context/types";

type TProps = TPartialFixedTableProps &
  TDimensions & {
    rows: TPicsRows;
    size: number;
  };
export const Grid = forwardRef<
  TGridHandle,
  TProps
>(
  (
    { size, rows, ...props }: TProps,
    handleRef
  ) => {
    const outerHandle =
      useRef<TOuterHandle | null>(null);
    const innerHandle =
      useRef<TInnerHandle | null>(null);
    const sourceRef =
      useRef<TGrid | null>(
        null
      );

    useImperativeHandle(
      handleRef,
      () => {
        return {
          scrollTop: () => {
            if (sourceRef.current) {
              sourceRef.current.scrollTo(
                0
              );
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
        overscanCount={40}
        {...props}
      >
        {Row}
      </FixedSizeList>
    );
  }
);
