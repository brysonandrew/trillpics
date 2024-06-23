import {
  TGridCellsConfig,
  TGridCellsRecordProps,
  TGridCellsStepStyle,
} from "~/pages/video/music/_context/init/grid-cell/types";
import { TMusicKey } from "~/store/state/music/types";

export const resolveGridCellsUpdateStyle =
  <T extends TMusicKey>(
    config: TGridCellsConfig<T> &
      TGridCellsRecordProps
  ) => {
    const {
      musicKey,
      rowIndex,
      columnIndex,
      gridCellsRecord,
    } = config;

    const handler = (
      next: TGridCellsStepStyle
    ) => {
      (
        gridCellsRecord[musicKey][
          rowIndex
        ][columnIndex] as HTMLDivElement
      ).style.opacity = next.opacity;

      (
        gridCellsRecord[musicKey][
          rowIndex
        ][columnIndex] as HTMLDivElement
      ).style.transitionDuration =
        next.transitionDuration;
    };

    return handler;
  };
