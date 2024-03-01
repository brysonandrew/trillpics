import { TClassValueProps } from '@brysonandrew/config-types';
import { HTMLProps } from 'react';

export type TSpaceProps = Omit<
  HTMLProps<HTMLElement>,
  'className'
> &
  TClassValueProps & {
    element?: keyof JSX.IntrinsicElements;
  };

export const AMOUNTS = [
  '0.25',
  '0.5',
  '1',
  '1.5',
  '2',
  '3',
  '4',
  '6',
  '8',
  '12',
  '16',
  '24',
  '32',
  '48',
  '60',
  '72',
  '86',
] as const;
export type TAmount = number; // typeof AMOUNTS[number];
