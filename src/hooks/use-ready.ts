import { useTrillPicsStore } from "~/store/middleware";

export const useReady = (): boolean => {
  const { screen, table } =
    useTrillPicsStore(
      ({ screen, table }) => ({
        screen,
        table,
      })
    );
  return (
    screen.isDimensions &&
    table.size > 0
  );
};
