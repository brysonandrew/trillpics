import { INIT_SCREEN } from "~/shell/init/hooks/measure/measure";
import { TCoreScreenState } from "~/store/state/core/types";
import { TStateHandler } from "~/store/types";
import { isDefined } from "~/utils/validation/is/defined";

export const coreScreenState: TStateHandler<
  TCoreScreenState
> = (set, get) => ({
  
  screen: INIT_SCREEN,
  isOnscreen: false,
  toggleOnscreen: (next?: boolean) => {
    set((draft: { isControls: boolean; isOnscreen: boolean; }) => {
      const nextOnscreenCheck =
        isDefined(next)
          ? next
          : !get().isOnscreen;
      draft.isOnscreen =
        nextOnscreenCheck;
    });
  },
});
