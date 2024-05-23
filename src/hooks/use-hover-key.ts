import { THoverKey } from "@brysonandrew/hooks-dom";
import { useTimebomb } from "~/hooks/use-time-bomb";
import { useTrillPicsStore } from "~/store/middleware";
import { useContextGrid } from "~/context";
type TEventUnion = any;
type TEventCallback = (
  event: TEventUnion
) => void;
type TEventHandler = (
  key: THoverKey
) => TEventCallback;

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
  const { main } = useContextGrid();
  const {
    hoverKeys,
    isHover,
    hover,
    unhover,
    cooldownEnd,
  } = useTrillPicsStore(
    ({
      hoverKeys,
      isHover,
      hover,
      unhover,
      cooldownEnd,
    }) => ({
      hoverKeys,
      isHover,
      hover,
      unhover,
      cooldownEnd,
    })
  );


  const { isArmed, trigger } =
    useTimebomb(1000, cooldownEnd);

  const onStart: TEventHandler =
    (key: THoverKey) =>
    (event: TEventUnion) => {
      if (main.cursor.isHoverIdle) {
        return;
      }
      if (config?.handlers?.start) {
        console.log("START")
        config.handlers.start?.(key);
      }

      hover(key);
    };
  const onStop: TEventHandler =
    (key: THoverKey) =>
    (event: TEventUnion) => {
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
    } as const);
  const motionHandlers = (
    key: THoverKey
  ) =>
    ({
      onHoverStart: onStart(key),
      onHoverEnd: onStop(key),
      onPointerLeave: onStop(key),
      onMouseLeave: onStop(key),
    } as const);

  const clear = hover;

  return {
    hoverKeys,
    isNoHover: hoverKeys.length === 0,
    isHover,
    handlers,
    motionHandlers,
    clear,
    isCooldown: isArmed,
  };
};
export type THoverKeyConfig =
  ReturnType<typeof useHoverKey>;
export type THoverKeyHandlers =
  THoverKeyConfig["handlers"];
