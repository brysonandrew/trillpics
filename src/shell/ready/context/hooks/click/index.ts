import { useEventListener } from "@brysonandrew/hooks-events";
import { useContextReady } from "~/shell/ready/context";
import { useTrillPicsStore } from "~/store/middleware";

export const useClickGrid = (
  trigger: () => void,
  isDisabled:boolean
) => {
  const { ref, main } =
    useContextReady();
    const { set } = useTrillPicsStore(
      ({ set }) => ({ set })
    );
  const handleClick = () => {
    set({hoverKeys:[]})
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
};
