import { useEventListener } from "@brysonandrew/hooks-events";
import { useContextGrid } from "~/context";

export const useClickGrid = (
  trigger: () => void
) => {
  const { ref, main } =
    useContextGrid();

  const handleClick = () => {
    main.cursor.isHoverIdle = true;
    const isHovering =
      ref.current?.isHovering();
      // console.log("IS HPVER",isHovering,'drag',main.cursor.isDragging)
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
