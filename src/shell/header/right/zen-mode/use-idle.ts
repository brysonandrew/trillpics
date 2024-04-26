import { useRef } from "react";
import { useViewportPresence } from "~/hooks/use-viewport-presence";
import { useVideoStore } from "~/store";

export const useOnscreenRef = () => {
  const { isControls, toggleControls } =
    useVideoStore();
  const isOnscreenRef = useRef(false);
  const handleShow = () => {
    toggleControls(true);
  };
  const onPointerEnter = () => {
    if (
      !isControls &&
      isOnscreenRef.current === false
    ) {
      handleShow();
    }
    isOnscreenRef.current = true;
  };
  const onPointerLeave = () => {
    isOnscreenRef.current = false;
  };
  useViewportPresence({
    onPointerEnter,
    onPointerLeave,
  });

  return isOnscreenRef;
};
