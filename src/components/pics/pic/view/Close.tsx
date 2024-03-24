import type { FC } from 'react';
import { CLOSE_ICON } from '@brysonandrew/icons-keys';
import { B } from '@brysonandrew/interactive'
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
      classValue='text-pink gap-2'
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
