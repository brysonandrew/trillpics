import { FC } from "react";
import { TableInfinite } from "~/components/table-infinite";
import { usePicsTable } from "~/pages/home/pics/use-pics-table";
import { Empty } from "~/pages/home/pics/empty";
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
  if (rows.length === 0)
    return <Empty />;

  return (
    <>
      {isVerticalScroll && (
        <div className="fixed h-screen w-[14px] top-0 bottom-0 right-0 bg-gradient-to-l dark:bg-black bg-white-5 border-black dark:border-white-5 border-l" />
      )}
      <TableInfinite
        rows={rows}
        rowHeight={size}
        columns={columns}
      />
    </>
  );
};
