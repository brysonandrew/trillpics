import { THoverKey } from "@brysonandrew/hooks-dom";
import { useTrillPicsStore } from "~/store";

type THandler = (
  key: THoverKey
) => void;
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
  } = useTrillPicsStore(
    ({
      hoverKeys,
      isHover,
      hover,
      unhover,
    }) => ({
      hoverKeys,
      isHover,
      hover,
      unhover,
    })
  );

  const onStart: THandler = (key) => {
    if (config?.handlers?.start) {
      config.handlers.start?.(key);
    }
    hover(key);
  };
  const onStop: THandler = (key) => {
    if (config?.handlers?.stop) {
      config.handlers.stop?.(key);
    }
    unhover(key);
  };
  const handlers = (
    key: THoverKey
  ) => ({
    onPointerEnter: () => onStart(key),
    onPointerOut: () => onStop(key),
    onPointerLeave: () => onStop(key),
    onMouseLeave: () => onStop(key),
  });
  const motionHandlers = (
    key: THoverKey
  ) => ({
    onHoverStart: () => onStart(key),
    onHoverEnd: () => onStop(key),
    onPointerLeave: () => onStop(key),
    onMouseLeave: () => onStop(key),
  });

  const clear = hover;

  return {
    hoverKeys,
    isNoHover: hoverKeys.length === 0,
    isHover,
    handlers,
    motionHandlers,
    clear,
  };
};
export type THoverKeyConfig =
  ReturnType<typeof useHoverKey>;
export type THoverKeyHandlers =
  THoverKeyConfig["handlers"];
