import {
  THoverKey,
  THoverMultiState,
} from "~/store/state/hover/types";
import { TStateHandler } from "~/store/types";
import { isDefined } from "~/utils/validation/is/defined";

export const hoverMultiState: TStateHandler<
  THoverMultiState
> = (set, get) => ({
  hoverKeys: [],
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
    const hoverKeys =
      get().hoverKeys.filter(
        (v) => v !== hoverKey
      );
    set({
      hoverKeys,
    });
  },
});
