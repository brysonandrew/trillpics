import { INIT_SCREEN } from "~/context/screen/measure";
import { TCoreScreenState } from "~/store/slices/core/types";
import { TStateHandler } from "~/store/types";
import { isDefined } from "~/utils/validation/is/defined";

export const coreScreenState: TStateHandler<
  TCoreScreenState
> = (_, get) => ({
  screen: INIT_SCREEN,
  isOnscreen: false,
  toggleOnscreen: (next?: boolean) => {
    get().updateState((draft) => {
      const nextOnscreenCheck =
        isDefined(next)
          ? next
          : !get().isOnscreen;
      if (
        nextOnscreenCheck &&
        !get().isControls
      ) {
        draft.isControls = true;
      }
      draft.isOnscreen =
        nextOnscreenCheck;
    });
  },
});
