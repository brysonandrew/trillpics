import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { resolveStepRef } from "~/hooks/grid";
import { TMusicKey } from "~/store/state/music/types";
import { TGridsStepRefConfig } from "~/pages/video/music/_context/refs/grid/types";

export const useGridsStepRef = <
  T extends TMusicKey
>(
  config: TGridsStepRefConfig<T>
) => {
  const {
    grid: { record },
  } = useMusicRefs();

  const result = resolveStepRef({
    ...config,
    record,
  });

  return result;
};
