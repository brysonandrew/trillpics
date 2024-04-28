import { FC } from "react";
import { ScrollbarSeam } from "~/components/layout/scrollbar-seam";
import { useTrillPicsStore } from "~/store";
import {
  TPartialFixedTableProps,
  TPicsRow,
} from "~/store/slices/table/types";
import {
  getCoreRowModel,
  useReactTable,
  Table,
  TableOptions,
} from "@tanstack/react-table";
import { Virtualize } from "~/shell/pics/table-infinite/virtualize";

type TProps =
  TPartialFixedTableProps<TPicsRow>;
export const Pics: FC<TProps> = ({
  ...props
}) => {
  const { table, screen } =
    useTrillPicsStore(
      ({
        table,
        screen,
        updateState,
      }) => ({
        table,
        screen,
        updateState,
      })
    );
  const {
    rows,
    columns,
    size,
    isVerticalScroll,
  } = table;
 // console.log(rows, columns);
  const options: TableOptions<TPicsRow> =
    {
      data: rows,
      columns,
      getCoreRowModel:
        getCoreRowModel(),
    };
  const tableConfig: Table<TPicsRow> =
    useReactTable<TPicsRow>(options);
  // if (rows.length === 0)
  //   return <NoPics />;

  return (
    <>
      {isVerticalScroll && (
        <ScrollbarSeam />
      )}
      {screen.isDimensions && (
        <Virtualize
          rowHeight={size}
          table={tableConfig}
          {...props}
          width={screen.width}
          height={screen.height}
        />
      )}
    </>
  );
};
