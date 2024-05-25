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
import { TTableUpdateCountResult } from "~/store/state/table/update/count";
import { useContextGrid } from "~/context";
import { CSSDeclarationList } from "tailwindcss/types/generated/default-theme";

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
    const outerHandle = useRef<
      any | null
    >(null);
    const innerHandle =
      useRef<TInnerHandle | null>(null);
    const sourceRef =
      useRef<TGrid | null>(null);

    useImperativeHandle(
      handleRef,
      () => {
        return {
          disableScroll: () => {
            // console.log(sourceRef.current)
            if (!outerHandle.current)
              return;
         
            (
              outerHandle.current
                .style as CSSStyleDeclaration
            ).setProperty(
              "overflow",
              "hidden"
            );
          },
          enableScroll: () => {
            // console.log(sourceRef.current)
            if (!outerHandle.current)
              return;
            (
              outerHandle.current
                .style as CSSStyleDeclaration
            ).setProperty(
              "overflow",
              "auto"
            );
          },
          scrollTop: () => {
            if (sourceRef.current) {
              sourceRef.current.scrollTo(
                0
              );
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
