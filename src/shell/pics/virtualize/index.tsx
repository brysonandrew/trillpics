import { FixedSizeList } from "react-window";
import { Row } from "~/shell/pics/virtualize/row";
import {
  TPartialFixedTableProps,
  TPicsRows,
} from "~/store/slices/table/types";
import { TDimensions } from "@brysonandrew/config-types";
import { useVirtualizeScroll } from "~/shell/pics/virtualize/use-scroll";

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
  const {
    onUpdate,
    setVirtualizeList,
    virtualizeList,
  } = useVirtualizeScroll();
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
      direction="ltr"
      ref={(instance) => {
        if (
          instance &&
          !virtualizeList
        ) {
          setVirtualizeList(instance);
        }
      }}
      {...props}
    >
      {Row}
    </FixedSizeList>
  );
};
