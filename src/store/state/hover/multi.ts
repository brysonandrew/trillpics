import { hoverDoneCheck } from "~/store/state/hover/done-check";
import {
  THoverKey,
  THoverMultiState,
} from "~/store/state/hover/types";
import { TStateHandler } from "~/store/types";
import { isDefined } from "~/utils/validation/is/defined";

export const hoverMultiState: TStateHandler<
  THoverMultiState
> = (set, get) => ({
  hoverDoneCheck: hoverDoneCheck(get),
  hoverKeys: [],
  hoverKeyCooldown: null,
  isHover: (hoverKey: THoverKey) => {
    return get().hoverKeys.includes(
      hoverKey
    );
  },
  hover: (hoverKey?: THoverKey) => {
    const hoverKeys = isDefined(
      hoverKey
    )
      ? [...get().hoverKeys, hoverKey]
      : [];
    set({
      hoverKeys,
    });
  },

  unhover: (hoverKey: THoverKey) => {
    const prevHoverKeys =
      get().hoverKeys;
    if (prevHoverKeys.length === 0)
      return;
    const hoverKeys =
      prevHoverKeys.filter(
        (v) => v !== hoverKey
      );
    set({
      hoverKeys,
      hoverKeyCooldown:
        prevHoverKeys + "",
    });
  },
});
