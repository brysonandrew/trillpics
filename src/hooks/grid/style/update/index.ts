import {
  TGridsConfig,
  TGridsRecordProps,
  TGridsStepStyle,
} from "~/pages/video/music/_context/init/refs/grid/types";
import { TMusicKey } from "~/store/state/music/types";

export const resolveGridsUpdateStyle = <
  T extends TMusicKey
>(
  config: TGridsConfig<T> &
    TGridsRecordProps
) => {
  const {
    musicKey,
    rowIndex,
    columnIndex,
    record,
  } = config;

  const handler = (
    next: TGridsStepStyle
  ) => {
    (
      record[musicKey][rowIndex][
        columnIndex
      ] as HTMLDivElement
    ).style.opacity = next.opacity;

    (
      record[musicKey][rowIndex][
        columnIndex
      ] as HTMLDivElement
    ).style.transitionDuration =
      next.transitionDuration;
  };

  return handler;
};
