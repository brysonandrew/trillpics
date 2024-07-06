import { useMusicRefs } from "~/pages/video/music/_context/refs";
import {
  TGridsBaseConfig,
  TGridsStepStyle,
} from "~/pages/video/music/_context/refs/grid/types";
import { TMusicKey } from "~/store/state/music/types";

export const useGridsUpdateStyle = <
  T extends TMusicKey
>(
  config: TGridsBaseConfig<T>
) => {
  const {
    musicKey,
    rowIndex,
    columnIndex,
  } = config;
  const {
    grid,
  } = useMusicRefs();
  const handler = (
    next: TGridsStepStyle
  ) => {
    if (!grid.record?.[musicKey][rowIndex])
      return;

    (
      grid.record[musicKey][rowIndex][
        columnIndex
      ] as HTMLDivElement
    ).style.opacity = next.opacity;

    (
      grid.record[musicKey][rowIndex][
        columnIndex
      ] as HTMLDivElement
    ).style.transitionDuration =
      next.transitionDuration;
  };

  return handler;
};
