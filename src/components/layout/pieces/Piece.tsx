import { FADE_PRESENCE_WITH_DELAY } from '@constants/animation';
import { TDivMotionProps } from '@brysonandrew/config-types';
import { motion } from 'framer-motion';

export const Piece = (
  props: TDivMotionProps,
) => {
  return (
    <motion.div layout {...props} />
  );
};

export const Delay = (
  props: TDivMotionProps,
) => (
  <Piece
    {...FADE_PRESENCE_WITH_DELAY}
    {...props}
  />
);

export const Position = (
  props: TDivMotionProps,
) => (
  <Piece layout='position' {...props} />
);

export const Size = (
  props: TDivMotionProps,
) => <Piece layout='size' {...props} />;

export const PreserveAspect = (
  props: TDivMotionProps,
) => (
  <Piece
    layout='preserve-aspect'
    {...props}
  />
);

export const NoLayout = (
  props: TDivMotionProps,
) => (
  <Piece layout={false} {...props} />
);
