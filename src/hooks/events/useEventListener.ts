import { useIsomorphicLayoutEffect } from '../life-cycle/useIsomorphicLayoutEffect';
import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';

// Window Event based useEventListener interface
export function useEventListener<
  K extends keyof WindowEventMap,
>(
  eventName: K | null,
  handler: (event: WindowEventMap[K]) => void,
  element?: undefined,
  options?: boolean | AddEventListenerOptions,
): void;

// Element Event based useEventListener interface
export function useEventListener<
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement = HTMLDivElement,
>(
  eventName: K | null,
  handler: (event: HTMLElementEventMap[K]) => void,
  element: RefObject<T>,
  options?: boolean | AddEventListenerOptions,
): void;

// Document Event based useEventListener interface
export function useEventListener<
  K extends keyof DocumentEventMap,
>(
  eventName: K | null,
  handler: (event: DocumentEventMap[K]) => void,
  element: RefObject<Document>,
  options?: boolean | AddEventListenerOptions,
): void;

// RTCPeerConnection Event based useEventListener interface
export function useEventListener<
  K extends keyof RTCPeerConnectionEventMap,
>(
  eventName: K | null,
  handler: (event: RTCPeerConnectionEventMap[K]) => void,
  element: RefObject<RTCPeerConnection>,
): void;

// RTCDataChannel Event based useEventListener interface
export function useEventListener<
  K extends keyof RTCDataChannelEventMap,
>(
  eventName: K | null,
  handler: (event: RTCDataChannelEventMap[K]) => void,
  element: RefObject<RTCDataChannel>,
): void;

// SpeechSynthesis Event based useEventListener interface
export function useEventListener<
  K extends keyof SpeechSynthesisEventMap,
>(
  eventName: K | null,
  handler: (
    event: SpeechSynthesisEventMap[K],
  ) => void,
  element: RefObject<SpeechSynthesis>,
): void;

// SpeechSynthesisUtterance Event based useEventListener interface
export function useEventListener<
  K extends keyof SpeechSynthesisUtteranceEventMap,
>(
  eventName: K | null,
  handler: (
    event: SpeechSynthesisUtteranceEventMap[K],
  ) => void,
  element: RefObject<SpeechSynthesisUtterance>,
): void;

export function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  T extends HTMLElement | void = void,
>(
  eventName: KW | KH | null,
  handler: (
    event:
      | WindowEventMap[KW]
      | HTMLElementEventMap[KH]
      | Event,
  ) => void,
  element?: RefObject<T>,
  options?: boolean | AddEventListenerOptions,
) {
  // Create a ref that stores handler
  const savedHandler = useRef(handler);
  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Define the listening target
    const targetElement: T | Window =
      element?.current || window;
    if (
      !(targetElement && targetElement.addEventListener) ||
      eventName === null
    ) {
      return;
    }

    // Create event listener that calls handler function stored in ref
    const eventListener: typeof handler = (event) =>
      savedHandler.current(event);

    targetElement.addEventListener(
      eventName,
      eventListener,
      options,
    );

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(
        eventName,
        eventListener,
      );
    };
  }, [eventName, element, options]);
}
