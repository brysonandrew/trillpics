import {
  TChildren,
  TClassValueProps,
} from '@brysonandrew/config-types';
import clsx from 'clsx';
import { FC } from 'react';

type TProps = {
  items: TChildren[];
} & TClassValueProps;
export const Splitter: FC<TProps> = ({
  classValue,
  items = [],
}) => {
  return (
    <ul
      className={clsx(
        'relative w-full',
        classValue,
      )}
    >
      {items
        .filter(Boolean)
        .map(
          (
            item,
            index, 
            { length: count },
          ) => {
            return (
              <li key={`${index}`}>
                {item}
              </li>
            );
          },
        )}
    </ul>
  );
};
