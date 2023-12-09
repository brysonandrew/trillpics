import { useState } from 'react';

export type THoverKey = string | number;
export const useHoverKey = () => {
  const [hoverKeys, setHoverKeys] =
    useState<THoverKey[]>([]);

  const onHoverStart = (
    key: THoverKey,
  ) =>
    setHoverKeys((prevKeys) => [
      ...prevKeys,
      key,
    ]);
  const onHoverEnd = (key: THoverKey) =>
    setHoverKeys((prevKeys) =>
      prevKeys.filter((v) => v !== key),
    );

  const handlers = (
    key: THoverKey,
  ) => ({
    onHoverStart: () =>
      onHoverStart(key),
    onHoverEnd: () => onHoverEnd(key),
    onPointerLeave: () =>
      onHoverEnd(key),
    onMouseLeave: () => onHoverEnd(key),
  });

  return {
    hoverKeys,
    isNoHover: hoverKeys.length === 0,
    isHover: (key: THoverKey) =>
      hoverKeys.includes(key),
    handlers,
  };
};
export type THoverKeyConfig =
  ReturnType<typeof useHoverKey>;
export type THoverKeyHandlers =
  THoverKeyConfig['handlers'];
