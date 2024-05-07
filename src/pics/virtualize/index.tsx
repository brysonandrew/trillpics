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
  TVirtualizeContextHandle,
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
    // const { clear, isNoHover } =
    // useHoverKey();
    const outerHandle =
      useRef<TOuterHandle | null>(null);
    const innerHandle =
      useRef<TInnerHandle | null>(null);
    const sourceRef =
      useRef<TVirtualizeList | null>();
    const fixedSizeList =
      sourceRef.current;
    useImperativeHandle(
      handleRef,
      () => {
        console.log("fixedSizeList");
        console.log(fixedSizeList);
        return {
          scrollTop: () => {
            fixedSizeList?.scrollToItem(
              0
            );
          },
          isHovering: () =>
            Boolean(
              outerHandle.current?.isHovering()
            ),
          scrollTrue: () => {
            console.log(fixedSizeList);
          },
          checkScrolling: () => {
            const isScrolling = (
              fixedSizeList?.state as any
            )?.isScrolling;
            return isScrolling;
          },
          onPointerEnter: () => {
            console.log(
              "Virtualize.onPointerEnter"
            );
          },
          onPointerLeave: () => {
            console.log(
              "Virtualize.onPointerLeave"
            );
          },
        };
      },
      []
    );
    return (
      <>
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
                instance;
            }
          }}
          innerElementType={Inner}
          outerElementType={Outer}
          innerRef={innerHandle}
          outerRef={outerHandle}
          {...props}
        >
          {Row}
        </FixedSizeList>
      </>
    );
  }
);
