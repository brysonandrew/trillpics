import { TChartsGridStepProps } from "~/components/charts/grid/step";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { TMusicKey } from "~/store/state/music/types";

export const resolveStepRef = <
  T extends TMusicKey
>(
  progressKey: T,
  config: TChartsGridStepProps<T>
) => {
  const {
    rowIndex,
    columnIndex,
  } = config;
  const { gridCellsRecord } =
    useMusicInitContext();
  const handler = (
    instance: HTMLDivElement
  ) => {
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

    gridCellsRecord[progressKey][
      rowIndex
    ][columnIndex] = null;

    if (instance && !gridCell) {
      gridCellsRecord[progressKey][
        rowIndex
      ][columnIndex] = instance;
    }
  };
  return handler;
};
