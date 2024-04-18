import {
  useRef,
  useState,
} from "react";
import { useViewportPresence } from "@brysonandrew/cursor/hooks/useViewportPresence";
import { useTimeoutRef } from "@brysonandrew/hooks-window";
import { useVideoStore } from "@/store";

export const useIdleStatus = () => {
  const { timeoutRef, endTimeout } =
    useTimeoutRef();
  const {
    timeoutRef: idleTimeoutRef,
    endTimeout: endIdleTimeout,
  } = useTimeoutRef();
  const { isControls, toggleControls } =
    useVideoStore();
  const isOnscreenRef = useRef(false);
  const isLeftAndEnteredRef = useRef<
    null | "left"
  >(null);

  const [idleStatus, setIdleStatus] =
    useState<
      null | "cooldown" | "idle"
    >(null);
  const handleShow = () => {
    toggleControls(true);
  };
  const onPointerEnter = () => {
    if (
      !isControls &&
      isLeftAndEnteredRef.current ===
        "left"
    ) {
      handleShow();
      isLeftAndEnteredRef.current =
        null;
    }

    endTimeout();
    endIdleTimeout();
    setIdleStatus(null);
    isOnscreenRef.current = true;
  };

  const onPointerLeave = () => {
    if (!isControls) {
      isLeftAndEnteredRef.current =
        "left";
    }
    isOnscreenRef.current = false;
    timeoutRef.current = setTimeout(
      () => {
        setIdleStatus("cooldown");
      },
      10000
    );

    idleTimeoutRef.current = setTimeout(
      () => {
        setIdleStatus("idle");
      },
      100000
    );
  };
  useViewportPresence({
    onPointerEnter,
    onPointerLeave,
  });

  return idleStatus;
};
