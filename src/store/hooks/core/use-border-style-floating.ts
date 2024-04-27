import { useBorderStyle } from "~/store/hooks/core/use-border-style";

export const useBorderStyleFloating =
  () => {
    const flat = useBorderStyle({
      layer: "flat",
    });
    return flat;
  };
