import { useRef } from "react";
import { useScreenPresence } from "~/hooks/use-screen-presence";
import { useTrillPicsStore } from "~/store/middleware";

export const useOnscreen = () => {
  const pointerLeaveWhileNoControlsCheck =
    useRef(false);
  const {
    isControls,
    isOnscreen,
    toggleControls,
    toggleOnscreen,
  } = useTrillPicsStore(
    ({
      isControls,
      isOnscreen,
      toggleControls,
      toggleOnscreen,
    }) => ({
      isControls,
      isOnscreen,
      toggleControls,
      toggleOnscreen,
    })
  );
  const onPointerEnter = () => {
    if (
      pointerLeaveWhileNoControlsCheck.current
    ) {
      toggleControls(true);
      pointerLeaveWhileNoControlsCheck.current =
        false;
    }
    toggleOnscreen(true);
  };
  const onPointerLeave = () => {
    if (!isControls) {
      pointerLeaveWhileNoControlsCheck.current =
        true;
    }
    toggleOnscreen(false);
  };

  useScreenPresence({
    onPointerEnter,
    onPointerLeave,
  });

  return isOnscreen;
};
