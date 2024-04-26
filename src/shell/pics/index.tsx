import { FC } from "react";
import { ScrollbarSeam } from "~/components/layout/scrollbar-seam";
import { TPicProps } from "~/shell/pics/pic";
import { TableInfinite } from "~/shell/pics/table-infinite";
import { TPicsTable } from "~/shell/pics/use-pics-table";
import { usePicsColumns } from "./columns";

type TProps = {
  picsTable: TPicsTable;
};
export const Pics: FC<TProps> = ({
  picsTable,
}) => {
  const {
    rows,
    size: _size,
    isVerticalScroll,
  } = picsTable;
  const size = _size - 6;
  const columns = usePicsColumns(
    rows,
    size,
  );
  if (rows.length === 0) {
    return <div className='px-4'>no pics</div>;
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
