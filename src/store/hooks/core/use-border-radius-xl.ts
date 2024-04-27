import { useTrillPicsStore } from "~/store";

export const useBorderRadiusXl = () => {
  const { borderRadiusXl } =
    useTrillPicsStore(
      ({ borderRadiusXl }) => ({
        borderRadiusXl,
      })
    );

  return borderRadiusXl;
};
