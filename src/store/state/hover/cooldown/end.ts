import { THoverCooldownEndHandler } from "~/store/state/hover/cooldown/types";
import { TSet } from "~/store/state/set/types";
import { TGet } from "~/store/types";

export const cooldownEnd =
  (
    set: TSet,
    get: TGet
  ): THoverCooldownEndHandler =>
  () => {
    const hoverCooldownKeys: never[] =
      [];
    set({
      isActiveHover:
        get().hoverChecksActive({
          hoverCooldownKeys,
        }),
      hoverCooldownKeys,
    });
  };
