import { FixedSizeList } from "react-window";
import { useScroll } from "~/context/scroll";
import { RenderRow } from "~/shell/pics/virtualize/render-row";
import {
  TPartialFixedTableProps,
  TPicsRows,
  TPicsRow,
} from "~/store/slices/table/types";
import { TDimensions } from "@brysonandrew/config-types";

type TProps = TPartialFixedTableProps &
  TDimensions & {
    rows: TPicsRows;
    size: number;
  };
export const Virtualize = ({
  size,
  rows,
  ...props
}: TProps) => {
  const { onUpdate, listRef } =
    useScroll();
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
          data[index].columns.join("-");
        return key;
      }}
      layout="vertical"
      ref={listRef}
      direction="ltr"
      {...props}
    >
      {RenderRow}
    </FixedSizeList>
  );
};
