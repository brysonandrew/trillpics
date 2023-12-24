import { useCursor } from '@context/cursor';
import {
  ValueTarget,
  ValueAnimationTransition,
  animate,
} from 'framer-motion';
import { TSign } from './useCursorOffset';
import { THoverKey } from './config';
import { useEffect, useRef } from 'react';
import {
  resolveCursorKeyFromHoverKey,
  TIP_CURSOR_KEYS,
  TTipCursorKey,
} from '@components/cursor/switch/config';
import { TAnimationControlsPoint } from '@t/animation';

export const LABEL_SIZE = 280;
const OFFSET = 20;

const resolveCalc = (
  percent: number,
  sign: TSign,
  px: number,
): ValueTarget =>
  `calc(${percent}% ${sign < 0 ? '-' : '+'} ${px}px)`;

const ANIMATION_OPTIONS: ValueAnimationTransition = {
  type: 'tween',
};

type THandlerConfig = {
  nextHoverKey?: THoverKey;
  nextSignX?: TSign;
  nextSignY?: TSign;
};
export const useCursorAnimate = () => {
  const { offsetRef, hoverKey, cursorLabel } = useCursor();

  const animateRef = useRef<
    Partial<TAnimationControlsPoint>
  >({});

  const handler = ({
    nextHoverKey = hoverKey,
    nextSignX = offsetRef.current.x,
    nextSignY = offsetRef.current.y,
  }: THandlerConfig = {}) => {
    const cursorKey =
      resolveCursorKeyFromHoverKey(nextHoverKey);

    const zeroX = resolveCalc(0, nextSignX, 0);
    const zeroY = resolveCalc(0, nextSignY, 0);

    let labelXValue: ValueTarget = zeroX;
    let labelYValue: ValueTarget = zeroY;

    if (
      TIP_CURSOR_KEYS.includes(cursorKey as TTipCursorKey)
    ) {
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
    }

    animateRef.current.x = animate(
      cursorLabel.x,
      labelXValue,
      ANIMATION_OPTIONS,
    );
    animateRef.current.y = animate(
      cursorLabel.y,
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
