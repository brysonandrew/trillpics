import {
  TScreen,
  useScreenMeasure,
} from "~/context/screen/measure";
import { useOnscreen } from "~/shell/header/right/zen-mode/use-onscreen";
import { useTrillPicsStore } from "~/store";

export const useInit = () => {
  const { table, updateState } =
    useTrillPicsStore(
      ({ table, updateState }) => ({
        table,
        updateState,
      })
    );
  const handleScreenReady = (
    screen: TScreen
  ) => {
    updateState((draft) => {
      draft.screen = screen;
    });
    table.update.dimensions(screen);
  };
  useScreenMeasure({
    isContainer: true,
    onReady: handleScreenReady,
  });
  useOnscreen();
};
