import { THoverKey } from "@brysonandrew/hooks-dom";
import { useTimebomb } from "~/hooks/use-time-bomb";
import { useTrillPicsStore } from "~/store/middleware";
import { useReadyContext } from "~/shell/ready/context";
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

export type THoverKeyConfig = {
  handlers?: {
    start?: THandler;
    stop?: THandler;
  };
  isDisabled?: boolean;
};
export const useHoverKey = (
  config?: THoverKeyConfig
) => {
  const isDisabled = config?.isDisabled;
  const { main } = useReadyContext();
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

  const { isArmed, trigger, disarm } =
    useTimebomb(1600, cooldownEnd);

  const onStart: TEventHandler =
    (key: THoverKey) =>
    (event: TEventUnion) => {
      disarm();

      if (main.cursor.isHoverIdle) {
        return;
      }
      if (config?.handlers?.start) {
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
      disarm();
      trigger();
    };
  const handlers = (key: THoverKey) =>
    isDisabled
      ? {}
      : ({
          onPointerEnter: onStart(key),
          onPointerOut: onStop(key),
          onPointerLeave: onStop(key),
          onMouseLeave: onStop(key),
        } as const);
  const motionHandlers = (
    key: THoverKey
  ) =>
    isDisabled
      ? {}
      : ({
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
export type TUseHoverKeyConfig =
  ReturnType<typeof useHoverKey>;
export type THoverKeyHandlers =
  THoverKeyConfig["handlers"];
