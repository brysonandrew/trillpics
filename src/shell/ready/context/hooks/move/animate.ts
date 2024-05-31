import {
  ValueTarget,
  ValueAnimationTransition,
  animate,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
import { TAnimationControlsPoint } from '@brysonandrew/motion-config-types';
import { TSign } from '~/shell/ready/context/hooks/move/types';
import { TMain } from '~/shell/init/context/types';

export const LABEL_SIZE = 80;
const OFFSET = 20;

const resolveCalc = (
  percent: number,
  sign: TSign,
  px: number,
): ValueTarget =>
  `calc(${percent}% ${sign < 0 ? '-' : '+'} ${px}px)` as const;

const ANIMATION_OPTIONS: ValueAnimationTransition = {
  type: 'tween',
};

type THandlerConfig = {
  nextHoverKey?: string;
  nextSignX?: TSign;
  nextSignY?: TSign;
};
export const useCursorAnimate = (main:TMain) => {

  const animateRef = useRef<
    Partial<TAnimationControlsPoint>
  >({});
  const handler = ({
    // nextHoverKey = hoverKey,
    nextSignX = main.cursor.offset.x,
    nextSignY = main.cursor.offset.y,
  }: THandlerConfig = {}) => {

    const zeroX = resolveCalc(0, nextSignX, 0);
    const zeroY = resolveCalc(0, nextSignY, 0);

    let labelXValue: ValueTarget = zeroX;
    let labelYValue: ValueTarget = zeroY;

    // if (cursorKey === CUSTOM_CURSOR_KEY) {
      const percentX = nextSignX < 0 ? -100 : 0;
      const percentY = nextSignY < 0 ? -100 : 0;

      labelXValue = resolveCalc(
        percentX,
        nextSignX,
        OFFSET,
      );
      labelYValue = resolveCalc(
        percentY,
        nextSignY,
        OFFSET,
      );
    // }

    animateRef.current.x = animate(
      main.cursor.label.x,
      labelXValue,
      ANIMATION_OPTIONS,
    );
    animateRef.current.y = animate(
      main.cursor.label.y,
      labelYValue,
      ANIMATION_OPTIONS,
    );
  };

  useEffect(() => {
    return () => {
      if (animateRef.current.x) {
        animateRef.current.x.stop();
      }
      if (animateRef.current.y) {
        animateRef.current.y.stop();
      }
    };
  }, []);

  return handler;
};
