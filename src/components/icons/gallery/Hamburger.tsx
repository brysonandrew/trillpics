import clsx, { ClassValue } from 'clsx';
import {
  motion,
  SVGMotionProps,
} from 'framer-motion';
import { FC } from 'react';

type TProps =
  SVGMotionProps<SVGSVGElement> & {
    classValue?: ClassValue;
  };
export const Hamburger: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <motion.svg
    className={clsx(classValue)}
    viewBox='0 0 512 512'
    width='26'
    height='26'
    fill='currentColor'
    {...props}
  >
    <path
      fill='currentColor'
      d='M32 96v64h448V96zm0 128v64h448v-64zm0 128v64h448v-64z'
    />
  </motion.svg>
);
