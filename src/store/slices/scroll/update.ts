import { TScrollUpdateHandler, TScrollUpdateState } from "~/store/slices/scroll/types";
import { TStateHandler } from "~/store/types";

export const scrollUpdateState: TStateHandler<
  TScrollUpdateState
> = (set, get): TScrollUpdateState => ({
  update: (
    ...args: Parameters<TScrollUpdateHandler>
  ) => {
    console.log(args);
    const [scrollOffset] = args;
  },
  // if (!get().isScroll) {
  //   const nextScrollY =
  //     1 - scrollOffset * 0.0006;
  //   scrollY.set(nextScrollY);
  // }
  // if (!isScrolling) {
  //   searchParams.delete(
  //     SEARCH_PARAM_ID
  //   );
  //   navigate(
  //     `${pathname}?${searchParams}`
  //   );
  //   setScrolling(true);
  // }
  // endTimeout();
  // timeoutRef.current = setTimeout(
  //   () => {
  //     setScrolling(false);
  //   },
  //   SCROLL_COOLDOWN
  // );

  // if (
  //   !isScroll &&
  //   scrollOffset > SCROLL
  // ) {
  //   setScroll(true);
  // }
  // if (
  //   isScroll &&
  //   scrollOffset < SCROLL
  // ) {
  //   setScroll(false);
  // }
});
