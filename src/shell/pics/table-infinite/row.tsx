import type { Cell as TCell } from "@tanstack/react-table";
import type { ListChildComponentProps } from "react-window";
import { TPicsBaseRow, TPicsTableRows } from "~/store/slices/table/types";
import { Cell } from "./cell";

type TProps<T extends TPicsBaseRow> =
  ListChildComponentProps<
    TPicsTableRows<T>
  >;
export const Row = <T extends TPicsBaseRow>(
  props: TProps<T>
) => {
  const { data, index, style } = props;
  const item = data[index];

  const cells = item.getVisibleCells();
  return (
    <div
      className="row"
      style={{
        //      filter: resolveUrlId(MOTION_BLUR_ID),
        ...style,
      }}
    >
      {cells.map(
        (
          cell: TCell<T, unknown>,
          cellIndex,
          { length }
        ) => {
          return (
            <Cell
              key={`${cell.id}-${cellIndex}`}
              cell={cell}
              count={length}
            />
          );
        }
      )}
    </div>
  );
};
