import { FC } from 'react';
import {
  TChildren,
  TDivProps,
} from '@brysonandrew/config-types';
import { TCursorKey } from '@brysonandrew/cursor';

type TProps = TDivProps & {
  title: string;
  cursorKey: TCursorKey;
  children: TChildren;
  icon: TChildren;
};
export const Item: FC<TProps> = ({
  title,
  icon,
  children,
  cursorKey,
  ...props
}) => {
  return (
    <div
      className='relative shrink-0 p-1 overflow-hidden'
      title={title}
      {...props}
    >
      <div className='row gap-2 py-0 pointer-events-none'>
        {icon}
      </div>
    </div>
  );
};
