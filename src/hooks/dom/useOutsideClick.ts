import type { RefObject } from "react";
import { useEventListener } from "../events/useEventListener";

type Handler = (event: MouseEvent | TouchEvent) => void;

type TEventKey = keyof Pick<GlobalEventHandlersEventMap, "touchstart" | "mousedown">;

export type TOutsideClickConfig<T> = {
  ref: RefObject<T>;
  handler: Handler;
  events?: readonly TEventKey[];
};
export const useOutsideClick = <
  T extends HTMLElement = HTMLElement,
>({
  ref,
  handler,
  events = ["mousedown", "touchstart"] as const,
}: TOutsideClickConfig<T>): void => {
  const handleEvent = (event: MouseEvent | TouchEvent) => {
    const el = ref?.current;

    // Do nothing if clicking ref's element or descendent elements
    if (!el || el.contains(event.target as Node)) {
      return;
    }

    handler(event);
  };
  events.forEach((event) => {
    useEventListener(event, handleEvent);
    useEventListener(event, handleEvent);
  });


};
