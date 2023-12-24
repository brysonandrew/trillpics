import { MutableRefObject } from 'react';
import { useCursorAnimate } from './useCursorAnimate';

export type TSign = -1 | 1;
export type TCursorOffset = {
  x: TSign;
  y: TSign;
};
type THandlerConfig = {
  nextX: number;
  nextY: number;
};
export type TOffsetRef = MutableRefObject<TCursorOffset>;

export const useCursorOffset = (offsetRef: TOffsetRef) => {
  const animate = useCursorAnimate();
  const handler = ({ nextX, nextY }: THandlerConfig) => {
    const viewportWidth = window.innerWidth;
    const viewportHalfWidth = viewportWidth * 0.5;

    const viewportHeight = window.innerHeight;
    const viewportHalfHeight = viewportHeight * 0.5;

    const BOUND_X = viewportHalfWidth * 0.6;
    const BOUND_Y = viewportHalfHeight * 0.6;

    const signX =
      nextX > viewportHalfWidth + BOUND_X ? -1 : 1;

    const signY =
      nextY < viewportHalfHeight - BOUND_Y ? 1 : -1;

    if (
      offsetRef.current.x !== signX ||
      offsetRef.current.y !== signY
    ) {
      offsetRef.current.x = signX;
      offsetRef.current.y = signY;
      animate({ nextSignX: signX, nextSignY: signY });
    }
  };

  return handler;
};
