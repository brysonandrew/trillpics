import { useBoxStyle } from "~/store/hooks/core/box/use-box-style";

export const useBoxStyleFloating =
  () => {
    const flat = useBoxStyle({
      layer: "flat",
    });
    return flat;
  };
