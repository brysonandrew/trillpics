import { useEventListener } from "@brysonandrew/hooks-events";
import { useContextGrid } from "~/context";

export const useClickGrid = (
  trigger: () => void
) => {
  const { ref } = useContextGrid();

  const handleClick = () => {
    const isHovering =
      ref.current?.isHovering();
    if (isHovering) {
      console.log("CLICKED")
      trigger();
    } else {
      console.log("CLICKED FAIL")

    }
  };
  useEventListener(
    "click",
    handleClick
  );
};
