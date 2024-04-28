import { useBoxStyleConfig } from "~/store/hooks/core";

export const useBorderRadiusXl = () => {
  const box = useBoxStyleConfig();
  return box.borderRadius;
};
