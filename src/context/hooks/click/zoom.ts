import { useEventListener } from "@brysonandrew/hooks-events";
import { useContextGrid } from "~/context";
import { useClickGrid } from "~/context/hooks/click";
import { usePicZoom } from "~/hooks/pic/zoom";

export const useClickZoom = () => {
  const {
    isClosing,
    isZoomed,
    toggle,
  } = usePicZoom();
  useClickGrid(toggle);
  return isClosing || isZoomed;
};
