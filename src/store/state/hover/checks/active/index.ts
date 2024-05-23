import { THoverChecksHandler } from "~/store/state/hover/checks/active/types";
import { TGet } from "~/store/types";

export const hoverChecksActive =
  (get: TGet): THoverChecksHandler =>
  (config = {}): boolean => {
    const hoverKeys =
      config.hoverKeys ??
      get().hoverKeys;
    const hoverCooldownKeys =
      config.hoverCooldownKeys ??
      get().hoverCooldownKeys;
    return (
      Boolean(
        hoverCooldownKeys.length > 0
      ) || hoverKeys.length > 0
    );
  };
