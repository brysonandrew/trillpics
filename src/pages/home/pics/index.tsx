import { FC } from "react";
import { TableInfinite } from "@components/table-infinite";
import { Empty } from "./Empty";
import { useColumns } from "./columns/useColumns";
import { usePicsTable } from "@pages/home/pics/use-pics-table";

export const List: FC = () => {
  const { rows, size } = usePicsTable();
  const columns = useColumns(
    rows,
    size
  );
  if (rows.length === 0) {
    return <Empty />;
  }

  return (
    <TableInfinite
      rows={rows}
      rowHeight={size}
      columns={columns}
    />
  );
};
