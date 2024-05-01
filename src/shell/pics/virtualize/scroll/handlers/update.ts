import {
  useLocation,
  useNavigate,
} from "react-router";
import { useSearchParams } from "react-router-dom";
import type { ListOnScrollProps } from "react-window";
import { useTimeoutRef } from "@brysonandrew/hooks-window";
import {
  SCROLL_COOLDOWN,
  SCROLL,
} from "~/store/state/scroll";
import { SEARCH_PARAM_ID } from "~/shell/pics/pic/display";
import { useTrillPicsStore } from "~/store";
import { TVirtualizeContext } from "~/shell/pics/virtualize/context";

type TConfig = Pick<
  TVirtualizeContext,
  "scrollY"
>;
export const useScrollUpdateHandler = ({
  scrollY,
}: TConfig) => {
  const {
    isScroll,
    isScrolling,
    updateState,
  } = useTrillPicsStore(
    ({
      isScroll,
      isScrolling,
      updateState,
    }) => ({
      isScroll,
      isScrolling,
      updateState,
    })
  );
  const { timeoutRef, endTimeout } =
    useTimeoutRef();
  const [searchParams] =
    useSearchParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handler = (
    props: ListOnScrollProps
  ) => {
    console.log(props);
    const { scrollOffset } = props;

    scrollY.set(-scrollOffset);

    if (!isScrolling) {
      searchParams.delete(
        SEARCH_PARAM_ID
      );
      navigate(
        `${pathname}?${searchParams}`
      );
      updateState({
        isScrolling: true,
      });
    }
    endTimeout();
    timeoutRef.current = setTimeout(
      () => {
        updateState({
          isScrolling: false,
        });
      },
      SCROLL_COOLDOWN
    );

    if (
      !isScroll &&
      scrollOffset > SCROLL
    ) {
      updateState({ isScroll: true });
    }
    if (
      isScroll &&
      scrollOffset < SCROLL
    ) {
      updateState({
        isScroll: false,
      });
    }
  };
  return handler;
};
export type TUseUseScrollUpdateHandlerResult =
  ReturnType<
    typeof useScrollUpdateHandler
  >;
