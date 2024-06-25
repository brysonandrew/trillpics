import {
  TGridsRecordProps,
  TGridsStepRefConfig,
} from "~/pages/video/music/_context/init/refs/grid/types";
import { TMusicKey } from "~/store/state/music/types";

export const resolveStepRef = <
  T extends TMusicKey
>(
  config: TGridsStepRefConfig<T> &
    TGridsRecordProps
) => {
  const {
    columnIndex,
    rowIndex,
    record,
    progressKey,
  } = config;

  const resolveGrid = () => {
    if (!record[progressKey]) {
      record[progressKey] = [];
    }
    if (
      !record[progressKey][
        rowIndex
      ]
    ) {
      record[progressKey][
        rowIndex
      ] = [];
    }
    const grid =
      record[progressKey]?.[
        rowIndex
      ]?.[columnIndex];

    if (!grid) {
      record[progressKey][
        rowIndex
      ][columnIndex] = null;
      return null;
    }
    return grid;
  };
  const grid = resolveGrid() ?? null;

  if (!grid) {
    const handler = (
      instance: HTMLDivElement
    ) => {
      if (instance && !grid) {
        record[progressKey][
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
      grid,
    };
  }
};
