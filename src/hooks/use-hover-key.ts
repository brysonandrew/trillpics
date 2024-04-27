import { THoverKey } from "@brysonandrew/hooks-dom";
import { useTrillPicsStore } from "~/store";

export const useHoverKey = () => {
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

  const handlers = (
    key: THoverKey
  ) => ({
    onHoverStart: () => hover(key),
    onHoverEnd: () => unhover(key),
    onPointerLeave: () => unhover(key),
    onMouseLeave: () => unhover(key),
  });

  const clear = hover;

  return {
    hoverKeys,
    isNoHover: hoverKeys.length === 0,
    isHover,
    handlers,
    clear,
  };
};
export type THoverKeyConfig =
  ReturnType<typeof useHoverKey>;
export type THoverKeyHandlers =
  THoverKeyConfig["handlers"];
