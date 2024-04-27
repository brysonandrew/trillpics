import { useTrillPicsStore } from "~/store";

export const useBorderRadiusXl = () => {
  const { borderRadius } = useTrillPicsStore(
    ({ borderRadius }) => ({
      borderRadius,
    })
  );

  return borderRadius;
};
