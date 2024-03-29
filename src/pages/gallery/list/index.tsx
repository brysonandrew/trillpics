import { FC } from "react";
import { TableInfinite } from "@components/table-infinite";
import { Empty } from "./Empty";
import { useColumns } from "./columns/useColumns";
import { useGallery } from "../context";

export const List: FC = () => {
  const { entriesContext } =
    useGallery();
  const { rows, size } = entriesContext;
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
