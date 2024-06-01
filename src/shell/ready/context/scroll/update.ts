import { useRef } from "react";
import type { ListOnScrollProps } from "react-window";
import {
  SCROLL,
  SCROLL_COOLDOWN,
} from "~/store/state/scroll";
import { useTrillPicsStore } from "~/store/middleware";
import { TReadyContext } from "~/shell/ready/context/types";
import {
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { OVER_CELL_PARAM_KEY } from "~/hooks/pic/constants";
import { useBlurAnimate } from "~/hooks/animate/blur/animate";

type TConfig = Pick<
  TReadyContext,
  | "scrollY"
  | "scrollTimeoutRef"
  | "main"
>;
export const useScrollUpdateHandler = ({
  scrollY,
  scrollTimeoutRef,
  main,
}: TConfig) => {
  const { timeoutRef, endTimeout } =
    scrollTimeoutRef;
  const [searchParams] =
    useSearchParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const prevScrollOffsetRef =
    useRef<number>(0);
  const handleBlur = useBlurAnimate(
    "scrollY",
    2,
    main
  );
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
      handleBlur(scrollDelta * 2);

      set({
        isScrolling: true,
        scrollDirection,
        scrollDelta,
      });
      searchParams.delete(
        OVER_CELL_PARAM_KEY
      );
      navigate(
        `${pathname}?${searchParams}`
      );
    }
    endTimeout();
    if (!isScrolling) return;
    timeoutRef.current = setTimeout(
      () => {
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
  return {
    handler,
    isScroll,
    isScrolling,
  };
};
export type TUseUseScrollUpdateHandlerResult =
  ReturnType<
    typeof useScrollUpdateHandler
  >;
