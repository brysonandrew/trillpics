import type { FC } from 'react';
import { CLOSE_ICON } from '@constants/icons';
import { B } from '@components/interactive/B';
import { I } from '@components/Icon';
import { useKey } from '@hooks/dom/useKey';

type TProps = { onClose(): void };
export const Close: FC<TProps> = ({
  onClose,
}) => {
  useKey({
    handlers: {
      onKeyDown: ({ key }) => {
        if (key === 'Escape') {
          onClose();
        }
      },
    },
  });
  return (
    <B
      title='Close'
      classValue='text-blue gap-2'
      onClick={onClose}
    >
      <I
        className='w-5 h-5'
        icon={CLOSE_ICON}
      />
      <>Close</>
    </B>
  );
};
