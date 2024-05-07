import { TScrollState } from "~/store/state/scroll/types";
import { TStateHandler } from "~/store/types";

export const SCROLL = 240;
export const SCROLL_COOLDOWN = 120;

export const scrollState: TStateHandler<
  TScrollState
> = () => ({
  isScroll: false,
});
