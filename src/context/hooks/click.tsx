import { TCell } from "~/pics/grid/pic";
import { usePicZoom } from "~/pics/grid/pic/hooks/zoom";

export const useClickHandler = (
  cell: TCell
) => {
  const {
    isClosing,
    isZoomed,
    zoom,
    close,
    reset,
  } = usePicZoom(cell);

  const handler = () => {
    if (isZoomed) {
      if (isClosing) {
        reset();
      } else {
        close();
      }
    } else {
      zoom();
    }
  };
  return handler;
};
