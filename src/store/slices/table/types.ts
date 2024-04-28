import { TDimensionsReady } from "@brysonandrew/config-types";
import {
  Row,
  CellContext,
  Table,
  HeaderContext,
} from "@tanstack/react-table";
import { FixedSizeListProps } from "react-window";
import { TScreen } from "~/context/screen/measure";
import { TPics } from "~/store/slices/pics/types";
import { TStateCreator } from "~/store/types";

export type TTableCalcConfig =
  TDimensionsReady & {
    cells: TPics;
  };
export type TPicsRow = {
  columns: TPics;
};

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

export type TTableUpdateState = {
  update: {
    dimensions(screen: TScreen): void;
    count(cells: TPics): void;
    calc(
      config: TTableCalcConfig
    ): void;
  };
};
export type TPicsTable =
  TTableUpdateState & {
    size: number;
    rows: TPicsRow[];
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
