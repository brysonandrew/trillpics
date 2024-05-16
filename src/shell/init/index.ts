import { useTimeoutRef } from "@brysonandrew/hooks-window";
import { useOnscreen } from "~/context/hooks/onscreen";
import { usePicTable } from "~/hooks/pic/table";
import { useFonts } from "~/context/fonts";
import {
  RESIZE_COOLDOWN,
  TScreen,
  useScreenMeasure,
} from "~/shell/init/measure";
import { useTrillPicsStore } from "~/store/middleware";

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
  const { update } = usePicTable();
  const handleScreenReady = (
    screen: TScreen
  ) => {
    endTimeout();
    timeoutRef.current = setTimeout(
      () => {
        set(
          (draft: {
            screen: TScreen;
          }) => {
            draft.screen = screen;
          }
        );
        if (screen.isDimensions) {
          const size =
            table.update.screen({
              screen,
            });
          update(size);
        }
      },
      screen.isResizing
        ? RESIZE_COOLDOWN * 2
        : 0
    );
  };
  useScreenMeasure({
    onReady: handleScreenReady,
  });
  useOnscreen();
  useFonts();
};
