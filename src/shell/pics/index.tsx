import { FC } from "react";
import { ScrollbarSeam } from "~/components/layout/scrollbar-seam";
import { TableInfinite } from "~/shell/pics/table-infinite";
import { usePicsTable } from "~/shell/pics/use-pics-table";
import { useColumns } from "./columns/useColumns";

export const List: FC = () => {
  const {
    rows,
    size: _size,
    isVerticalScroll,
  } = usePicsTable();
  const size = _size - 4;
  const columns = useColumns(
    rows,
    size
  );
  if (rows.length === 0) {
    return <div>no pics</div>;
  }

  return (
    <>
      {isVerticalScroll && (
        <ScrollbarSeam />
      )}
      <TableInfinite
        rows={rows}
        rowHeight={size}
        columns={columns}
      />
    </>
  );
};
