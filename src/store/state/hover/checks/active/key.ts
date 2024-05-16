import { hoverChecksActive } from "~/store/state/hover/checks/active";
import { THoverChecksKeyHandler } from "~/store/state/hover/checks/active/types";
import { TGet } from "~/store/types";

export const hoverChecksActiveKey =
  (get: TGet): THoverChecksKeyHandler =>
  (key, config) => {
    return (
      hoverChecksActive(get)(config) &&
      get().hoverKeys.includes(key)
    );
  };
