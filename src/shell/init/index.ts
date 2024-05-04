import { useTimeoutRef } from "@brysonandrew/hooks-window";
import { useOnscreen } from "~/pics/virtualize/use-onscreen";
import {
  RESIZE_COOLDOWN,
  TScreen,
  useScreenMeasure,
} from "~/shell/init/measure";
import { useTrillPicsStore } from "~/store";
import { TSet } from "~/store/state/set/types";

export const useInit = () => {
  const { timeoutRef, endTimeout } =
    useTimeoutRef();
  const { table, set } =
    useTrillPicsStore(
      ({ table, set }) => ({
        table,
        set,
      })
    );
  const handleScreenReady = (
    screen: TScreen
  ) => {
    endTimeout();
    timeoutRef.current = setTimeout(
      () => {
        set((draft: { screen: TScreen; }) => {
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
