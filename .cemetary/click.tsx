import { usePicZoom } from "~/pics/grid/pic/hooks/zoom";

export const useClickHandler = () => {
  const {
    isClosing,
    isZoomed,
    zoom,
    close,
    clear
  } = usePicZoom();

  const handler = () => {
    if (isZoomed) {
      if (isClosing) {
       clear();
      } else {
        close();
      }
    } else {
      zoom();
    }
  };
  return handler;
};
