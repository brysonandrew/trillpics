import { TChartsGridStepProps } from "~/components/charts/grid/step";
import { TGridCellsRecord } from "~/pages/video/music/_context/init/types";
import { TMusicKey } from "~/store/state/music/types";

export type TGridCellsStepRefConfig<
  T extends TMusicKey
> = Pick<
  TChartsGridStepProps<T>,
  "columnIndex" | "rowIndex"
> & {
  progressKey: T;
};
