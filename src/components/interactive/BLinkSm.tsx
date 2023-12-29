import { FC } from 'react';
import { TInteractiveProps } from '@t/css/interactive';
import { BLink } from './BLink';
import {
  TLinkProps,
  TClassValueProps,
} from '@t/dom';
import { I } from '@components/Icon';
import { motion } from 'framer-motion';
import { resolveShadow } from './effects/glow';
import { FADE_PRESENCE } from '@constants/animation';

type TProps = TLinkProps &
  TClassValueProps & {
    isActive: boolean;
    to: string;
    icon: string;
  } & TInteractiveProps;
export const BLinkSm: FC<TProps> = ({
  isActive,
  to,
  icon,
  shape = 'interactive-rect-sm',
  look,
  classValue,
  ...props
}) => {
  return (
    <BLink
      to={to}
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
    </BLink>
  );
};
