import {
  THoverKey,
  THoverState,
} from "~/store/slices/hover/types";
import { TStateHandler } from "~/store/types";

export const hoverState: TStateHandler<
  THoverState
> = (set, get): THoverState => ({
  hoverKeys: [],
  isHover: (hoverKey: THoverKey) => {
    return get().hoverKeys.includes(
      hoverKey
    );
  },
  hover: (hoverKey: THoverKey) => {
    const hoverKeys = [
      ...get().hoverKeys,
      hoverKey,
    ];
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
