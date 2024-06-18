import { TChartsGridStepProps } from "~/components/charts/grid/step";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { TProgressKey } from "~/pages/video/music/_context/init/types";

type TConfig = TChartsGridStepProps;
export const resolveStepRef = (
  progressKey: TProgressKey,
  config: TConfig
) => {
  const {
    rowIndex,
    columnIndex,
    stepsKey,
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
