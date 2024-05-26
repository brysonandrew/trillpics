import { TMain } from '~/context/types';
import { useCursorAnimate } from './animate';


type THandlerConfig = {
  nextX: number;
  nextY: number;
};
export const useCursorOffset = (main: TMain) => {
  const handleAnimate = useCursorAnimate(main);
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
      main.cursor.offset.x !== signX ||
      main.cursor.offset.y !== signY
    ) {
      main.cursor.offset.x = signX;
      main.cursor.offset.y = signY;
      handleAnimate({ nextSignX: signX, nextSignY: signY });
    }
  };

  return handler;
};
