import clsx from 'clsx';
import { FC } from 'react';
import { TInteractiveProps } from '@t/css/interactive';
import {
  BAnchor,
  TProps as TBAnchorProps,
} from './BAnchor';
import { I } from '@components/Icon';
import { motion } from 'framer-motion';
import { resolveShadow } from './effects/glow';
import { FADE_PRESENCE } from '@constants/animation';

type TProps = TBAnchorProps &
  TInteractiveProps & {
    isActive?: boolean;
    icon: string;
  };
export const BAnchorSm: FC<
  TProps
> = ({
  isActive,
  shape = 'interactive-rect-sm',
  look = 'neu-flat-risen',
  icon,
  ...props
}) => {
  return (
    <BAnchor
      classValue={clsx('relative')}
      shape={shape}
      look={look}
      {...props}
    >
      {isActive && (
        <motion.div
          {...FADE_PRESENCE}
          style={{
            boxShadow: resolveShadow(
              4,
              'teal',
            ),
          }}
          className='cover rounded-sm pointer-events-none'
        />
      )}
      <I icon={icon} />
    </BAnchor>
  );
};
