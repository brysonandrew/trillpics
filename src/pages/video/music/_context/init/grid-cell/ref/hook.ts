import { useContextMusicInit } from "~/pages/video/music/_context/init";
import { resolveStepRef } from "~/pages/video/music/_context/init/grid-cell/ref";
import { TGridCellsStepRefConfig } from "~/pages/video/music/_context/init/grid-cell/ref/types";
import { TMusicKey } from "~/store/state/music/types";

export const useGridCellsStepRef = <
  T extends TMusicKey
>(
  config: TGridCellsStepRefConfig<T>
) => {
  const { gridCellsRecord } =
    useContextMusicInit();

  const result = resolveStepRef({
    ...config,
    gridCellsRecord,
  });

  return result;
};
