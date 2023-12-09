import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import type { MutableRefObject } from "react";

/**
  useInterval source 
  @see https://gist.github.com/Danziger/336e75b6675223ad805a88c2dfdcfd4a#file-throttled-callback-hook-ts
**/
/**
 * Use setInterval with Hooks in a declarative way.
 *
 * @see https://stackoverflow.com/a/59274004/3723993
 * @see https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
export function useInterval(
  callback: () => Promise<void | null> | void,
  delay: number | null
): MutableRefObject<number | null> {
  const intervalRef = useRef<number | null>(null);
  const callbackRef = useRef(callback);

  // Remember the latest callback:
  //
  // Without this, if you change the callback, when setInterval ticks again, it
  // will still call your old callback.
  //
  // If you add `callback` to useEffect's deps, it will work fine but the
  // interval will be reset.

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Set up the interval:

  useEffect(() => {
    if (typeof delay === "number") {
      intervalRef.current = window.setInterval(
        () => callbackRef.current(),
        delay
      );

      // Clear interval if the components is unmounted or the delay changes:
      return () =>
        window.clearInterval(intervalRef.current || 0);
    }
  }, [delay]);

  // In case you want to manually clear the interval from the consuming component...:
  return intervalRef;
}
