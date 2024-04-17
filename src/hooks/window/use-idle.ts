import {
  useRef,
  useState,
} from "react";
import { useViewportPresence } from "@brysonandrew/cursor/hooks/useViewportPresence";
import { useTimeoutRef } from "@brysonandrew/hooks-window";

export const useIdleStatus = () => {
  const { timeoutRef, endTimeout } =
    useTimeoutRef();
  const {
    timeoutRef: idleTimeoutRef,
    endTimeout: endIdleTimeout,
  } = useTimeoutRef();
  const isOnscreenRef = useRef(false);
  const [idleStatus, setIdleStatus] =
    useState<
      null | "cooldown" | "idle"
    >(null);
  const onPointerEnter = () => {
    endTimeout();
    endIdleTimeout();
    setIdleStatus(null);
    isOnscreenRef.current = true;
  };

  const onPointerLeave = () => {
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
