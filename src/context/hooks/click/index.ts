import { useEventListener } from "@brysonandrew/hooks-events";
import { useContextGrid } from "~/context";
import { useTrillPicsStore } from "~/store/middleware";

export const useClickGrid = (
  trigger: () => void
) => {


  const { ref, main } =
    useContextGrid();

  const handleClick = () => {
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
