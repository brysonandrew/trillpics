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
import {
  TScreen,
  useScreenMeasure,
} from "~/context/screen/measure";
import { useOnscreen } from "~/shell/header/right/zen-mode/use-onscreen";
import { usePicsColumns } from "./columns";

type TProps =
  TPartialFixedTableProps<TPicsRow>;
export const Pics: FC<TProps> = ({
  ...props
}) => {
  const { table, screen, updateState } =
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
    size: _size,
    isVerticalScroll,
  } = table;

  const size = _size - 6;
  const columns = usePicsColumns(
    rows,
    size
  );

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
