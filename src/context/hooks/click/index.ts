import { useEventListener } from "@brysonandrew/hooks-events";
import { useContextGrid } from "~/context";
import { useTrillPicsStore } from "~/store/middleware";

export const useClickGrid = (
  trigger: () => void,
  isDisabled:boolean
) => {
  const { ref, main } =
    useContextGrid();
    const { set } = useTrillPicsStore(
      ({ set }) => ({ set })
    );
  const handleClick = () => {
    set({hoverKeys:[]})
    if (isDisabled) return;
    main.cursor.isHoverIdle = true;
    const isHovering =
      ref.current?.isHovering();
    if (
      isHovering &&
      !main.cursor.isDragging
    ) {
      trigger();
    }
    main.cursor.isDragging = false;
  };
  useEventListener(
    "click",
    handleClick
  );
};
