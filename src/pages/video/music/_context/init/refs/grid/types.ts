import { TChartsGridStepProps } from "~/components/charts/grid/step";
import {
  CHARTS_GRID_STEP_EMPTY_STYLE,
  CHARTS_GRID_STEP_ACTIVE_STYLE,
} from "~/pages/video/music/_context/init/refs/grid/constants";
import { TMusicKey } from "~/store/state/music/types";

export type TGridsStepRefConfig<
  T extends TMusicKey
> = Pick<
  TChartsGridStepProps<T>,
  "columnIndex" | "rowIndex"
> & {
  progressKey: T;
};
export type TBaseGridCell =
  null | HTMLDivElement;
export type TGridCell = TBaseGridCell;

export type TGridCells = TGridCell[];
export type TGridRows = TGridCells[];
export type TGridCellsRecord = Record<
  string,
  TGridRows
>;

export type TGridsHandler = (
  cell: TGridCell,
  index: number,
  arr: TGridCells
) => void;

export type TGridsConfig<
  T extends TMusicKey
> = TChartsGridStepProps<T> & {
  progressKey: T;
};

export type TGridsStepStyle =
  | typeof CHARTS_GRID_STEP_EMPTY_STYLE
  | typeof CHARTS_GRID_STEP_ACTIVE_STYLE;

export type TGridsRecordProps = {
  record: TGridCellsRecord;
};

export type TGridsBaseConfig<
  T extends TMusicKey
> = Pick<
  TChartsGridStepProps<T>,
  | "stepsKey"
  | "rowIndex"
  | "columnIndex"
  | "musicKey"
>;
