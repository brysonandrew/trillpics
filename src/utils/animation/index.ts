import { Variant, Variants } from 'framer-motion';

export const resolvePresence = (O: Variant, I: Variant): Variants => ({
  initial: O,
  animate: I,
  exit: O,
});


export const resolveFadeRight = (isI: boolean) => {
  const O = { opacity: 0, x: -20 };
  const I = { opacity: 1, x: 0 };

  return isI ? I : O;
};

export const resolveFadeRightProps = (isI: boolean) => ({
  initial: resolveFadeRight(false),
  animate: resolveFadeRight(isI),
});

export const resolveVerticalShiftPresence = (
  y: `${number}%`,
) => {
  const O = { opacity: 1, y, rotateX: 45 };
  const I = { opacity: 1, y: 0, rotateX: 0 };

  return {
    ...resolvePresence(O, I),
    transition: {
      ease: 'easeInOut',
    },
  };
};

