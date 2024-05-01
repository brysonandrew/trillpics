import { TDimensionsReady } from "@brysonandrew/config-types";
import { FixedSizeListProps } from "react-window";
import { TStateCreator } from "~/store/types";
import { TTableUpdateCountResult } from "~/store/state/table/update/count";
import { TScreen } from "~/shell/init/measure";
import { TPics } from "~/store/state/pics/types";

export type TTableRowsConfig = {
  count: TTableUpdateCountResult;
  cells: TPics;
};

type TWidthProps = Pick<
  TDimensionsReady,
  "width"
>;
export type TTableCountConfig =
  TWidthProps;
export type TTableSetConfig = Pick<
  TPicsTable,
  | "rows"
  | "size"
  | "isVerticalScroll"
  | "count"
>;

export type TTableSizeConfig =
  TWidthProps & {
    count: TTableUpdateCountResult;
  };
export type TTableVerticalScrollConfig =
  TWidthProps &
    Pick<TPicsTable, "size"> & {
      rowsCount: number;
    };

// {
//   rows: TPicsRow[];
//   columns: TPics;
// };
export type TPicsRow = {
  columns: TPics;
};
export type TPicsColumn = any;
// ColumnDef<
//   TPicsRow,
//   any
// >;
export type TPicsColumns =
  TPicsColumn[];

export type TPicCell = any;
// CellContext<
//   TPicsRow,
//   any
// >;

export type TPicHeader = any;
// HeaderContext<
//   TPicsRow,
//   any
// >;

export type TPicsRows = TPicsRow[];

export type TPicsBaseRow = object;

// export type TPicsTableTanstack<
//   T extends TPicsBaseRow
// > = Table<T>;

// export type TPicsTableRow<
//   T extends TPicsBaseRow
// > = Row<T>;
// export type TPicsTableRows<
//   T extends TPicsBaseRow
// > = TPicsTableRow<T>[];

// export type TCellString = CellContext<
//   TPicsRow,
//   string
// >;

export type TTableCreateConfig = {
  cells: TPics;
  screen: TDimensionsReady;
  count: TTableUpdateCountResult;
};
export type TTableColumnsConfig =
  TTableUpdateCountResult &
    Pick<TPicsTable, "rows" | "size">;
export type TTableUpdateState = {
  update: {
    screen(
      config: Pick<
        TTableCreateConfig,
        "screen"
      >
    ): void;
    cells(
      cells: Pick<
        TTableCreateConfig,
        "cells"
      >
    ): void;
    count(
      config: TTableCountConfig
    ): TTableUpdateCountResult;
    create(
      config: TTableCreateConfig
    ): void;
    rows(
      config: TTableRowsConfig
    ): TPicsRows;
    // columns(
    //   config: TTableColumnsConfig
    // ): TPicsColumns;
    size(
      config: TTableSizeConfig
    ): number;
    verticalScrollCheck(
      config: TTableVerticalScrollConfig
    ): boolean;
    set(config: TTableSetConfig): void;
  };
};
export type TPicsTable =
  TTableUpdateState & {
    count: TTableUpdateCountResult;
    size: number;
    rows: TPicsRows;
    isVerticalScroll: boolean;
  };
export type TTableState = {
  table: TPicsTable;
};
export type TTableStateCreator =
  TStateCreator<TTableState>;
export type TPartialFixedTableProps =
  Partial<
    FixedSizeListProps<TPicsRows>
  >;
