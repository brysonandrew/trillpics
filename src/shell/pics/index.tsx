import { FC } from "react";
import { ScrollbarSeam } from "~/components/layout/scrollbar-seam";
import { TPicProps } from "~/shell/pics/pic";
import { TableInfinite } from "~/shell/pics/table-infinite";
import { TPicsTable } from "~/shell/pics/use-pics-table";
import { usePicsColumns } from "./columns";

type TProps = {
  PicFc?: FC<TPicProps>;
  picsTable: TPicsTable;
};
export const Pics: FC<TProps> = ({
  picsTable,
  PicFc
}) => {
  const {
    rows,
    size: _size,
    isVerticalScroll,
  } = picsTable;
  const size = _size - 4;
  const columns = usePicsColumns(
    rows,
    size,
    PicFc
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
