import { DURATION } from '@constants/animation';

export const INITIAL_KEY = 'initial';
export const HOVER_KEY = 'hover';
export const ANIMATE_KEY = 'animate';
export const EXIT_KEY = 'exit';

export const PARENT_ANIMATE_CONFIG = {
  initial: INITIAL_KEY,
  animate: ANIMATE_KEY,
  whileHover: HOVER_KEY,
  exit: EXIT_KEY,
};

type TResolveParentAnimateConfig = {
  isHover?: boolean | null;
};
export const resolveParentAnimateConfig = (
  config: TResolveParentAnimateConfig = {},
) => {
  const { isHover } = config;
  if (typeof isHover === 'undefined')
    return PARENT_ANIMATE_CONFIG;
  return {
    initial: INITIAL_KEY,
    animate: isHover
      ? [ANIMATE_KEY, HOVER_KEY]
      : ANIMATE_KEY,
    exit: EXIT_KEY,
  };
};

export const EFFECT_ANIMATE_TRANSITION = {
  ease: 'easeIn',
  duration: DURATION ? DURATION + 0.08 : DURATION,
  delay: 0.08,
};

export const EFFECT_HOVER_TRANSITION = {
  ease: 'linear',
  duration: DURATION,
  delay: 0,
};
