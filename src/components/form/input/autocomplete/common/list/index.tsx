import { FC, Fragment } from 'react';
import { resolveCompositeKey } from '@utils/keys';
import { Item } from './Item';
import {
  TChildren,
  TClassValueProps,
  TElementProps,
} from '@brysonandrew/config-types';
import clsx from 'clsx';

export type TItemPassedProps =
  TElementProps;

type TListProps = Omit<
  TElementProps,
  'children'
>;

type TProps = TListProps &
  TClassValueProps & {
    id: string;
    values: readonly string[];
    itemProps?: TItemPassedProps;
    Empty?: FC;
    right?: TChildren;
    children?(
      value: string,
      index: number,
    ): TChildren;
  };
export const List: FC<TProps> = ({
  Empty = Fragment,
  id,
  values,
  classValue,
  itemProps = {},
  right,
  children,
  ...props
}) => (
  <div className='relative row-start-space -left-2 max-h-48 overflow-y-scroll pl-2 my-1 pb-1 w-[calc(100%+0.5rem)]'>
    <ul
      className={clsx(
        'relative w-full',
        classValue ?? 'flex flex-wrap',
      )}
      {...props}
    >
      {values.length === 0 ? (
        <Empty />
      ) : (
        <>
          {values.map(
            (value, index) => (
              <Item
                id={id}
                key={resolveCompositeKey(
                  id,
                  value,
                  index,
                )}
                index={index}
                value={value}
                {...itemProps}
              >
                {children?.(
                  value,
                  index,
                )}
              </Item>
            ),
          )}
        </>
      )}
    </ul>
    {right}
  </div>
);
