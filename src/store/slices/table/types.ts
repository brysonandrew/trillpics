import { FC } from "react";
import { TDimensionsReady } from "@brysonandrew/config-types";
import {
  Row,
  CellContext,
  Table,
  HeaderContext,
  ColumnDef,
} from "@tanstack/react-table";
import { FixedSizeListProps } from "react-window";
import { TPicProps } from "~/shell/pics/pic";
import { TPics } from "~/store/slices/pics/types";
import { TStateCreator } from "~/store/types";
import { TTableUpdateCountResult } from "~/store/slices/table/update/count";
import { TScreen } from "~/shell/init/measure";

export type TTableRowsConfig =
  TTableUpdateCountResult & {
    cells: TPics;
  };
export type TTableCountConfig = Pick<
  TDimensionsReady,
  "width"
>;
export type TTableSetConfig = Pick<
  TPicsTable,
  | "rows"
  | "size"
  | "columns"
  | "isVerticalScroll"
>;

export type TTableSizeConfig =
  TTableUpdateCountResult &
    Pick<TDimensionsReady, "width">;
export type TTableVerticalScrollConfig =
  Pick<TPicsTable, "size"> & {
    rowsCount: number;
  } & Pick<TDimensionsReady, "width">;

// {
//   rows: TPicsRow[];
//   columns: TPics;
// };
export type TPicsRow = {
  columns: TPics;
};
export type TPicsColumn = ColumnDef<
  TPicsRow,
  any
>;
export type TPicsColumns =
  TPicsColumn[];

export type TPicCell = CellContext<
  TPicsRow,
  any
>;

export type TPicHeader = HeaderContext<
  TPicsRow,
  any
>;

export type TPicsRows = TPicsRow[];

export type TPicsBaseRow = object;

export type TPicsTableTanstack<
  T extends TPicsBaseRow
> = Table<T>;

export type TPicsTableRow<
  T extends TPicsBaseRow
> = Row<T>;
export type TPicsTableRows<
  T extends TPicsBaseRow
> = TPicsTableRow<T>[];

export type TCellString = CellContext<
  TPicsRow,
  string
>;

export type TTableCreateConfig = {
  cells: TPics;
  screen: TScreen;
  PicFc?: FC<TPicProps>;
};
export type TTableColumnsConfig = Pick<
  TPicsTable,
  "rows" | "size"
> &
  Pick<TTableCreateConfig, "PicFc">;

export type TTableUpdateState = {
  update: {
    screen(
      config: Pick<
        TTableCreateConfig,
        "screen" | "PicFc"
      >
    ): void;
    cells(
      cells: Pick<
        TTableCreateConfig,
        "cells" | "PicFc"
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
    columns(
      config: TTableColumnsConfig
    ): TPicsColumns;
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
    size: number;
    rows: TPicsRows;
    columns: TPicsColumns;
    isVerticalScroll: boolean;
  };
export type TTableState = {
  table: TPicsTable;
};
export type TTableStateCreator =
  TStateCreator<TTableState>;
export type TPartialFixedTableProps<
  T extends TPicsBaseRow
> = Partial<
  FixedSizeListProps<TPicsTableRows<T>>
>;
