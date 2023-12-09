import { useState } from 'react';

export const useHover = (
  onEnd?: () => void,
) => {
  const [isHover, setHover] = useState<
    boolean | null
  >(null);

  const onHoverStart = () =>
    setHover(true);
  const onHoverEnd = () => {
    if (onEnd) onEnd();
    setHover(false);
  };

  return {
    isHover,
    onHoverStart,
    onHoverEnd,
    onPointerLeave: onHoverEnd,
    onMouseLeave: onHoverEnd,
  };
};
