import { useBorderStyle } from "~/store/hooks/core/use-border-style";

export const useBorderStyleFlat =
  () => {
    const flat = useBorderStyle({
      layer: "flat",
      borderRadius: "borderRadius",
    });
    return flat;
  };
