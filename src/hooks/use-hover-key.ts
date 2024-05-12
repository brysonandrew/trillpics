import {
  MouseEventHandler,
  PointerEventHandler,
} from "react";
import { THoverKey } from "@brysonandrew/hooks-dom";
import { useTimebomb } from "~/hooks/use-time-bomb";
import { useTrillPicsStore } from "~/store/middleware";

type TEventCallback = (
  event: Event
) => void;
type THandler = (
  key: THoverKey
) =>
  | TEventCallback
  | MouseEventHandler<HTMLButtonElement>
  | PointerEventHandler<HTMLButtonElement>
  | undefined;
type TConfig = {
  handlers?: {
    start?: THandler;
    stop?: THandler;
  };
};
export const useHoverKey = (
  config?: TConfig
) => {
  const {
    hoverKeys,
    isHover,
    hover,
    unhover,
    set,
  } = useTrillPicsStore(
    ({
      hoverKeys,
      isHover,
      hover,
      unhover,
      set,
    }) => ({
      hoverKeys,
      isHover,
      hover,
      unhover,
      set,
    })
  );

  const { isCountdown, trigger } =
    useTimebomb({
      countdown: 1000,
      target: () => {
        set({ hoverKeyCooldown: null });
      },
    });

  const onStart: THandler =
    (key: THoverKey) =>
    (event: Event) => {
      console.log(event);
      if (config?.handlers?.start) {
        config.handlers.start?.(key);
      }
      hover(key);
    };
  const onStop: THandler =
    (key: THoverKey) =>
    (event: Event) => {
      console.log(event);

      if (config?.handlers?.stop) {
        config.handlers.stop?.(key);
      }
      unhover(key);
      trigger();
    };
  const handlers = (key: THoverKey) =>
    ({
      onPointerEnter: onStart(key),
      onPointerOut: onStop(key),
      onPointerLeave: onStop(key),
      onMouseLeave: onStop(key),
      onMouseDown: onStop(key),
      onPointerDown: onStop(key),
    } as const);
  const motionHandlers = (
    key: THoverKey
  ) =>
    ({
      onHoverStart: onStart(key),
      onHoverEnd: onStop(key),
      onPointerLeave: onStop(key),
      onMouseLeave: onStop(key),
      onPointerDown: onStop(key),
      onTap: onStop(key),
    } as const);

  const clear = hover;

  return {
    hoverKeys,
    isNoHover: hoverKeys.length === 0,
    isHover,
    handlers,
    motionHandlers,
    clear,
    isCooldown: isCountdown,
  };
};
export type THoverKeyConfig =
  ReturnType<typeof useHoverKey>;
export type THoverKeyHandlers =
  THoverKeyConfig["handlers"];
