import type { FC } from 'react';
import { CLEAR_ICON } from '@brysonandrew/icons-keys';
import { TClassValueProps } from '@brysonandrew/config-types';
import clsx from 'clsx';
import { I } from '@components/Icon';

type TProps = TClassValueProps & {
  onRemove(): void;
};
export const Clear: FC<TProps> = ({
  classValue,
  onRemove,
}) => (
  <button
    type='button'
    className={clsx(classValue)}
    title='Clear all'
    onClick={() => {
      onRemove();
    }}
  >
    <div className='hover:text-red p-1 m-1 bg-highlight-02 rounded-full'>
      <I icon={CLEAR_ICON} />
    </div>
  </button>
);
