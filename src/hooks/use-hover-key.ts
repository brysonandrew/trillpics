import { THoverKey } from "@brysonandrew/hooks-dom";
import { useTimebomb } from "~/hooks/use-time-bomb";
import { useTrillPicsStore } from "~/store/middleware";

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
    trigger();
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
    isCooldown: isCountdown,
  };
};
export type THoverKeyConfig =
  ReturnType<typeof useHoverKey>;
export type THoverKeyHandlers =
  THoverKeyConfig["handlers"];
