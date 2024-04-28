import { useTrillPicsStore } from "~/store";
import { TBoxStyleConfig } from "~/store/slices/core/types";

export const useBoxStyleConfig = () => {
  const { box } = useTrillPicsStore<{
    box: TBoxStyleConfig;
  }>(({ box }) => ({
    box,
  }));

  return box;
};
