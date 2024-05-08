import {
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { FixedSizeList } from "react-window";
import { Row } from "~/pics/virtualize/row";
import {
  TPartialFixedTableProps,
  TPicsRows,
} from "~/store/state/table/types";
import { TDimensions } from "@brysonandrew/config-types";
import {
  TVirtualizeListHandle,
  TVirtualizeList,
} from "~/pics/virtualize/context";
import {
  Inner,
  TInnerHandle,
} from "~/pics/virtualize/inner";
import {
  Outer,
  TOuterHandle,
} from "~/pics/virtualize/outer";
import { isVirtualizeListCheck } from "~/pics/virtualize/validation";
import { isOuterCheck } from "~/pics/virtualize/validation/outer";

type TProps = TPartialFixedTableProps &
  TDimensions & {
    rows: TPicsRows;
    size: number;
  };
export const Virtualize = forwardRef<
  TVirtualizeListHandle,
  TProps
>(
  (
    { size, rows, ...props }: TProps,
    handleRef
  ) => {
    // const outerHandle =
    //   useRef<TOuterHandle | null>(null);
    const innerHandle =
      useRef<TInnerHandle | null>(null);
    const sourceRef =
      useRef<TVirtualizeList | null>(
        null
      );

    const fixedSizeList =
      sourceRef.current;
console.log(fixedSizeList)
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
            if (innerHandle.current?.isHovering()) return true 
            return false;
          },
          readInstance: () => {
            console.log(fixedSizeList);
          },
          checkScrolling: () => {
            console.log("scrolling");

            console.log(sourceRef.current?.state)
            if (sourceRef.current?.state.isScrolling) return true
            return false;
          },
        };
      },
      []
    );
    return (
      <FixedSizeList<TPicsRows>
        useIsScrolling
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
              instance;
          }
        }}
        innerElementType={Inner}
        // outerElementType={Outer}
        innerRef={innerHandle}
        // outerRef={outerHandle}
        {...props}
      >
        {Row}
      </FixedSizeList>
    );
  }
);
