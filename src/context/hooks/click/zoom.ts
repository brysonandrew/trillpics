import { useEventListener } from "@brysonandrew/hooks-events";
import { useContextGrid } from "~/context";
import { usePicZoom } from "~/hooks/pic/zoom";

export const useClickZoom = () => {
  const {
    isClosing,
    isZoomed,
    toggle,
  } = usePicZoom();
  const { ref } = useContextGrid();

  const handleClick = () => {
    const isHovering =
      ref.current?.isHovering();
    if (isHovering) {
      toggle();
    }
  };
  useEventListener(
    "click",
    handleClick
  );

  return isClosing || isZoomed;
};
