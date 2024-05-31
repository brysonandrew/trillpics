import { useTimeoutRef } from "@brysonandrew/hooks-window";
import { usePicTableWrite } from "~/hooks/pic/table/write";
import {
  RESIZE_COOLDOWN,
  TScreen,
} from "~/shell/init/hooks/measure/measure";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";

export const useInit = () => {
  const { timeoutRef, endTimeout } =
    useTimeoutRef();
  const {
    table,
    set,
    screen,
  } = useTrillPicsStore(
    ({
      table,
      screen,
      set,
    }) => ({
      table,
      screen,
      set,
    })
  );
  const { update } = usePicTableWrite();
  const handleScreenReady = (
    screen: TScreen
  ) => {
    endTimeout();
    timeoutRef.current = setTimeout(
      () => {
        set((draft: TState) => {
          draft.screen = screen;
        });
        if (
          screen.isDimensions &&
          !screen.isResizing
        ) {
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

  return {
    table,
    screen,
    onReady: handleScreenReady,
  };
};
