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
} from "~/shell/pics/virtualize/context";
import { Inner } from "~/shell/pics/virtualize/inner";
import { Outer } from "~/shell/pics/virtualize/outer";

type TProps = TPartialFixedTableProps &
  TDimensions & {
    rows: TPicsRows;
    size: number;
  };
export const Virtualize = forwardRef<
  TVirtualizeContextHandle,
  TProps
>(
  (
    { size, rows, ...props }: TProps,
    handleRef
  ) => {
    const innerRef =
      useRef<TVirtualizeList | null>(
        null
      );
    console.log(props);
    useImperativeHandle(
      handleRef,
      () => {
        const h = innerRef.current;
        console.log(h);
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
            !innerRef.current
          ) {
            console.log("update");
            innerRef.current = instance;
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
);
