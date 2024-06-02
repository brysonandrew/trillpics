import { useEventListener } from "@brysonandrew/hooks-events";
import { useReadyContext } from "~/shell/ready/context";
import { useTrillPicsStore } from "~/store/middleware";

export const useClickGrid = (
  trigger: () => void,
  isDisabled: boolean
) => {
  const { ref, main } =
    useReadyContext();
  const { set, isScrolling } =
    useTrillPicsStore(
      ({ set, isScrolling }) => ({
        set,
        isScrolling,
      })
    );
  const handleClick = () => {
    // set({hoverKeys:[]})
    if (isDisabled) return;
    main.cursor.isHoverIdle = true;
    // const isHovering =
    //   ref.current?.isHovering();
    if (
      // isHovering &&
      !main.cursor.isDragging &&
      main.cursor.isOnGrid
    ) {
      trigger();
    }
  };
  useEventListener(
    "click",
    handleClick
  );
  
  const handleTouchEnd = (
    event: TouchEvent
  ) => {
    if (
      event.touches.length === 0 ||
      isScrolling
    )
      return;

    trigger();
  };

  useEventListener<"touchend">(
    "touchend",
    handleTouchEnd
  );
};
