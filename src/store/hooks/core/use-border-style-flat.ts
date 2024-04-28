import { useBoxStyle } from "~/store/hooks/core/box/use-box-style";

export const useBoxStyleFlat =
  () => {
    const flat = useBoxStyle({
      layer: "flat",
      borderRadius: "borderRadius",
    });
    return flat;
  };
