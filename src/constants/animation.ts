import { resolvePresence } from '@utils/animation';

export const DURATION = 0.2;

export const TRANSITION = {
  duration: DURATION,
  ease: 'linear',
};

export const DELAY_TRANSITION = {
  ...TRANSITION,
  delay: TRANSITION.duration,
};

export const FADE_PRESENCE_WITH_DELAY =
  resolvePresence(
    {
      opacity: 0,
      transition: DELAY_TRANSITION,
    },
    {
      opacity: 1,
      transition: DELAY_TRANSITION,
    },
  );

export const FADE_PRESENCE =
  resolvePresence(
    { opacity: 0 },
    { opacity: 1 },
  );

export const MOTION_CONFIG = {
  transition: TRANSITION,
};
