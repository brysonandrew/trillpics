import { TScrollState } from "~/store/state/scroll/types";
import { TStateHandler } from "~/store/types";

export const SCROLL = 240;
export const SCROLL_COOLDOWN = 0;

export const scrollState: TStateHandler<
  TScrollState
> = () => ({
  isScroll: false,
  isScrolling:false,
  scrollDirection: null,
  scrollDelta:null
});
