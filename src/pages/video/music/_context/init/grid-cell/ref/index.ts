import { TGridCellsStepRefConfig } from "~/pages/video/music/_context/init/grid-cell/ref/types";
import { TGridCellsRecordProps } from "~/pages/video/music/_context/init/grid-cell/types";
import { TGridCellsRecord } from "~/pages/video/music/_context/init/types";
import { TMusicKey } from "~/store/state/music/types";

export const resolveStepRef = <
  T extends TMusicKey
>(
  config: TGridCellsStepRefConfig<T> &
    TGridCellsRecordProps
) => {
  const {
    columnIndex,
    rowIndex,
    gridCellsRecord,
    progressKey,
  } = config;

  const resolveGridCell = () => {
    if (!gridCellsRecord[progressKey]) {
      gridCellsRecord[progressKey] = [];
    }
    if (
      !gridCellsRecord[progressKey][
        rowIndex
      ]
    ) {
      gridCellsRecord[progressKey][
        rowIndex
      ] = [];
    }
    const gridCell =
      gridCellsRecord[progressKey]?.[
        rowIndex
      ]?.[columnIndex];

    if (!gridCell) {
      gridCellsRecord[progressKey][
        rowIndex
      ][columnIndex] = null;
      return null;
    }
    return gridCell;
  };
  const gridCell =
    resolveGridCell() ?? null;

  if (!gridCell) {
    const handler = (
      instance: HTMLDivElement
    ) => {
      if (instance && !gridCell) {
        gridCellsRecord[progressKey][
          rowIndex
        ][columnIndex] = instance;
      }
    };
    return {
      isAlreadyDefined: false,
      handler,
    };
  } else {
    return {
      isAlreadyDefined: true,
      gridCell,
    };
  }
};
