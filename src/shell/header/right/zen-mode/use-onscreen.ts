import { useRef } from "react";
import { useScreenPresence } from "~/hooks/use-screen-presence";
import { useTrillPicsStore } from "~/store";

export const useOnscreen = () => {
  const {
    isOnscreen,
    toggleOnscreen,
    isControls,
    toggleControls,
  } = useTrillPicsStore(
    ({
      isOnscreen,
      toggleOnscreen,
      isControls,
      toggleControls,
    }) => ({
      isOnscreen,
      toggleOnscreen,
      isControls,
      toggleControls,
    })
  );

  const onPointerEnter = () => {

    toggleOnscreen(true);
  };
  const onPointerLeave = () => {
    toggleOnscreen(false);
  };
  useScreenPresence({
    onPointerEnter,
    onPointerLeave,
  });

  return isOnscreen;
};
