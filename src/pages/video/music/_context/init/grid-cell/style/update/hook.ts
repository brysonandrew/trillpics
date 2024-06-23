import { useContextMusicInit } from "~/pages/video/music/_context/init";
import {
  TGridCellsBaseConfig,
  TGridCellsStepStyle,
} from "~/pages/video/music/_context/init/grid-cell/types";
import { TMusicKey } from "~/store/state/music/types";

export const useGridCellsUpdateStyle = <
  T extends TMusicKey
>(
  config: TGridCellsBaseConfig<T>
) => {
  const {
    musicKey,
    rowIndex,
    columnIndex,
  } = config;
  const { gridCellsRecord } =
    useContextMusicInit();
  const handler = (
    next: TGridCellsStepStyle
  ) => {
    if (
      !gridCellsRecord?.[musicKey][
        rowIndex
      ]
    )
      return;

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
