import { useVideoStore } from "~/store";
import { THoverKey } from "~/store/types";

export const useHoverKey = () => {
  const {
    hoverKeys,
    isHover,
    hover,
    unhover,
  } = useVideoStore();

  const handlers = (
    key: THoverKey
  ) => ({
    onHoverStart: () => hover(key),
    onHoverEnd: () => unhover(key),
    onPointerLeave: () => unhover(key),
    onMouseLeave: () => unhover(key),
  });

  return {
    hoverKeys,
    isNoHover: hoverKeys.length === 0,
    isHover,
    handlers,
  };
};
export type THoverKeyConfig =
  ReturnType<typeof useHoverKey>;
export type THoverKeyHandlers =
  THoverKeyConfig["handlers"];
