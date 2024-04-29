import { TScrollState } from "~/store/slices/scroll/types";
import { scrollUpdateState } from "~/store/slices/scroll/update";
import { TStateHandler } from "~/store/types";

export const SCROLL = 240;
export const SCROLL_COOLDOWN = 120;

export const scrollState: TStateHandler<
  TScrollState
> = (...args): TScrollState => ({
  isScrolling: false,
  isScroll: false,
  // scroll: scrollUpdateState(...args),
});
