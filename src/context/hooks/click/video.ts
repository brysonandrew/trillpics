import { useEventListener } from "@brysonandrew/hooks-events";
import { useContextGrid } from "~/context";

export const useClickVideo = (
  toggle: () => void
) => {
  const { ref } = useContextGrid();

  const handleClick = () => {
    const isHovering =
      ref.current?.isHovering();
    console.log(isHovering);
    if (isHovering) {
      toggle();
    }
  };
  useEventListener(
    "click",
    handleClick
  );
};
