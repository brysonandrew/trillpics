import {
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { FixedSizeList } from "react-window";
import { Row } from "~/shell/pics/virtualize/row";
import {
  TPartialFixedTableProps,
  TPicsRows,
} from "~/store/state/table/types";
import { TDimensions } from "@brysonandrew/config-types";
import {
  TVirtualizeContextHandle,
  TVirtualizeList,
  useVirtualizeContext,
} from "~/shell/pics/virtualize/context";
import { withRefMutable } from "~/hoc/ref/mutable";
import { Inner } from "~/shell/pics/virtualize/inner";
import { Outer } from "~/shell/pics/virtualize/outer";


type TProps = TPartialFixedTableProps &
  TDimensions & {
    rows: TPicsRows;
    size: number;
  };
export const Virtualize =
  withRefMutable(
    forwardRef<
      TVirtualizeContextHandle,
      TProps
    >(
      (
        {
          size,
          rows,
          ...props
        }: TProps,
        listRef
      ) => {
        const ref =
          useRef<TVirtualizeList | null>(
            null
          );

        const { onUpdate } =
          useVirtualizeContext();

        useImperativeHandle(
          listRef,
          () => {
            const h = ref.current;
            return {
              scrollTop: () => {
                h?.scrollToItem(0);
              },
            };
          },
          []
        );
        return (
          <FixedSizeList<TPicsRows>
            onScroll={onUpdate}
            itemCount={rows.length}
            itemData={rows}
            itemSize={size}
            itemKey={(
              index: number,
              data: TPicsRows
            ) => {
              const key =
                data[
                  index
                ].columns.join("-");
              return key;
            }}
            layout="vertical"
            direction="ltr"
            ref={(instance) => {
              if (
                instance &&
                !ref.current
              ) {
                ref.current = instance;
              }
            }}
            innerElementType={Inner}
            outerElementType={Outer}
            {...props}
          >
            {Row}
          </FixedSizeList>
        );
      }
    )
  );
