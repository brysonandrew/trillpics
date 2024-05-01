import { useTimeoutRef } from "@brysonandrew/hooks-window";
import { useOnscreen } from "~/shell/pics/virtualize/use-onscreen";
import {
  RESIZE_COOLDOWN,
  TScreen,
  useScreenMeasure,
} from "~/shell/init/measure";
import { useTrillPicsStore } from "~/store";

export const useInit = () => {
  const { timeoutRef, endTimeout } =
    useTimeoutRef();
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
    endTimeout();
    timeoutRef.current = setTimeout(
      () => {
        updateState((draft) => {
          draft.screen = screen;
        });
        if (screen.isDimensions) {
          table.update.screen({
            screen,
          });
        }
      },
      screen.isResizing
        ? RESIZE_COOLDOWN * 2
        : 0
    );
  };
  useScreenMeasure({
    isContainer: true,
    onReady: handleScreenReady,
  });
  useOnscreen();
};
