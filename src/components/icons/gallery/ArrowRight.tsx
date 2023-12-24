import clsx, { ClassValue } from 'clsx';
import { FC } from 'react';

type TProps = {
  classValue?: ClassValue;
};
export const ArrowRight: FC<TProps> = ({ classValue }) => (
  <svg
    className={clsx(classValue)}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='28'
    height='28'
    fill='currentColor'
  >
    <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
  </svg>
);
