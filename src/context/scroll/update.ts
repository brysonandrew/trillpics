import { useRef } from "react";
import type { ListOnScrollProps } from "react-window";
import {
  SCROLL,
  SCROLL_COOLDOWN,
} from "~/store/state/scroll";
import { useTrillPicsStore } from "~/store/middleware";
import { useTimeoutRef } from "@brysonandrew/hooks-window";
import { TVirtualizeContext } from "~/context/types";

type TConfig = Pick<
  TVirtualizeContext,
  "scrollY" | "ref"
> 
export const useScrollUpdateHandler = ({
  scrollY,
  ref: handle,
}: TConfig) => {
  const prevScrollOffsetRef =
    useRef<number>(0);
  const { timeoutRef, endTimeout } =
    useTimeoutRef();
  const { isScroll, isScrolling, set } =
    useTrillPicsStore(
      ({
        isScroll,
        isScrolling,
        set,
      }) => ({
        isScroll,
        isScrolling,
        set,
      })
    );

  const handler = (
    props: ListOnScrollProps
  ) => {
    const {
      scrollOffset,
      scrollDirection,
      scrollUpdateWasRequested,
    } = props;

    scrollY.set(-scrollOffset);

    const scrollDelta = Math.abs(
      prevScrollOffsetRef.current -
        scrollOffset
    );
    if (
      !isScrolling &&
      scrollDelta > 0
    ) {
      console.log(
        "start scrolling",
        scrollDelta
      );
      set({
        isScrolling: true,
        scrollDirection,
        scrollDelta,
      });
    }
    endTimeout();
    if (!isScrolling) return;
    timeoutRef.current = setTimeout(
      () => {
        console.log(
          "stop scrolling",
          scrollDelta
        );
      
        set({
          isScrolling: false,
          scrollDirection: null,
          scrollDelta,
        });
     
      },
      SCROLL_COOLDOWN
    );
    if (
      !isScroll &&
      scrollOffset > SCROLL
    ) {
      set({ isScroll: true });
    }
    if (
      isScroll &&
      scrollOffset < SCROLL
    ) {
      set({
        isScroll: false,
      });
    }

    prevScrollOffsetRef.current =
      scrollOffset;
  };
  return {handler,isScroll,isScrolling};
};
export type TUseUseScrollUpdateHandlerResult =
  ReturnType<
    typeof useScrollUpdateHandler
  >;
