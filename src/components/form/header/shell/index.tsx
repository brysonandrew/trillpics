import type { FC } from 'react';
import {
  TChildren,
  TClassValueProps,
} from '@t/index';
import clsx from 'clsx';
import { Title } from '../../Title';
import { Piece } from '@components/layout/pieces/Piece';

export type TProps =
  TClassValueProps & {
    left: TChildren;
    right?: TChildren;
  };
export const Shell: FC<TProps> = ({
  classValue,
  left,
  right,
}) => {
  return (
    <Piece
      className={clsx(
        'row-space w-full gap-4 h-8',
        classValue,
      )}
    >
      <Title>{left}</Title>
      <>{right}</>
    </Piece>
  );
};
