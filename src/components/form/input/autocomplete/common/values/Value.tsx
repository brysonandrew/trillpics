import type { FC } from 'react';
import { Icon } from '@iconify/react';
import { REMOVE_DUOTONE_ICON } from '@constants/icons';

type TProps = {
  value: string;
  index: number;
  onRemove(index?: number): void;
};
export const Value: FC<TProps> = ({
  index,
  value,
  onRemove,
}) => (
  <button
    type='button'
    className='relative group row gap-2'
    title={`Delete ${value}`}
    onClick={(e) => {
      onRemove(index);
      e.preventDefault();
    }}
  >
    <i className='text-highlight text-left'>
      {value}
    </i>
    <div className='group-hover:text-red'>
      <Icon
        icon={REMOVE_DUOTONE_ICON}
      />
    </div>
  </button>
);
