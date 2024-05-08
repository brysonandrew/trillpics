import {
  useLocation,
  useNavigate,
} from "react-router";
import { useSearchParams } from "react-router-dom";
import type { ListOnScrollProps } from "react-window";
import { useTimeoutRef } from "@brysonandrew/hooks-window";
import { SCROLL } from "~/store/state/scroll";
import { SEARCH_PARAM_ID } from "~/pics/pic/display";
import { useTrillPicsStore } from "~/store";
import { TVirtualizeContext } from "~/pics/virtualize/context";

type TConfig = Pick<
  TVirtualizeContext,
  "scrollY" | "ref"
>;
export const useScrollUpdateHandler = ({
  scrollY,
  ref: handle,
}: TConfig) => {
  const { isScroll, set } =
    useTrillPicsStore(
      ({ isScroll, set }) => ({
        isScroll,
        set,
      })
    );

  const [searchParams] =
    useSearchParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handler = (
    props: ListOnScrollProps
  ) => {
    const { scrollOffset } = props;
    scrollY.set(-scrollOffset);

    if (
      !handle.current?.checkScrolling()
    ) {
      searchParams.delete(
        SEARCH_PARAM_ID
      );
      navigate(
        `${pathname}?${searchParams}`
      );
    }
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
  };
  return handler;
};
export type TUseUseScrollUpdateHandlerResult =
  ReturnType<
    typeof useScrollUpdateHandler
  >;
