import { useState } from 'react';

export const useHover = () => {
  const [isHover, setHover] = useState<boolean | null>(
    null,
  );

  const onHoverStart = () => setHover(true);
  const onHoverEnd = () => setHover(false);

  return {
    isHover,
    onHoverStart,
    onHoverEnd,
    onPointerLeave: onHoverEnd,
    onMouseLeave: onHoverEnd,
  };
};
