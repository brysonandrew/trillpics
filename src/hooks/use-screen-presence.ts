import {
  useEffect,
  useRef,
} from "react";
import { useEventListener } from "@brysonandrew/hooks-events";
import { TElementValue } from "~/context/types";

export type TConfig = {
  onPointerEnter(
    event: PointerEvent
  ): void;
  onPointerLeave(
    event: PointerEvent
  ): void;
};
export const useScreenPresence = ({
  onPointerLeave,
  onPointerEnter,
}: TConfig) => {
  const docRef =
    useRef<TElementValue>(null);

  useEffect(() => {
    docRef.current =
      document.documentElement;
  }, []);

  useEventListener<
    "pointerenter",
    HTMLElement
  >(
    "pointerenter",
    onPointerEnter,
    docRef
  );

  useEventListener<
    "pointerleave",
    HTMLElement
  >(
    "pointerleave",
    onPointerLeave,
    docRef
  );
};
