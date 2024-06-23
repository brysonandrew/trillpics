import { TChartsGridStepProps } from "~/components/charts/grid/step";
import {
  CHARTS_GRID_STEP_EMPTY_STYLE,
  CHARTS_GRID_STEP_ACTIVE_STYLE,
} from "~/pages/video/music/_context/init/grid-cell/constants";
import {
  TGridCell,
  TGridCells,
  TGridCellsRecord,
} from "~/pages/video/music/_context/init/types";
import { TMusicKey } from "~/store/state/music/types";

export type TGridCellsHandler = (
  cell: TGridCell,
  index: number,
  arr: TGridCells
) => void;

export type TGridCellsConfig<
  T extends TMusicKey
> = TChartsGridStepProps<T> & {
  progressKey: T;
};

export type TGridCellsStepStyle =
  | typeof CHARTS_GRID_STEP_EMPTY_STYLE
  | typeof CHARTS_GRID_STEP_ACTIVE_STYLE;

export type TGridCellsRecordProps = {
  gridCellsRecord: TGridCellsRecord;
};

export type TGridCellsBaseConfig<
  T extends TMusicKey
> = Pick<
  TChartsGridStepProps<T>,
  | "stepsKey"
  | "rowIndex"
  | "columnIndex"
  | "musicKey"
  
>;
