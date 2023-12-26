import { FC } from 'react';
import { B } from '@components/interactive/B';
import { I } from '@components/Icon';
import clsx from 'clsx';
import { TButtonMotionProps } from '@t/dom';
import { Backdrop } from '../../../../../components/interactive/Backdrop';
import { resolveCompositeKey } from '@utils/keys';

type TProps = TButtonMotionProps & {
  isHover: boolean | null;
  src: string;
  isFirstPosition: boolean;
};
export const Add: FC<TProps> = ({
  isHover,
  src,
  isFirstPosition,
  ...props
}) => {
  const iconSize = isFirstPosition
    ? 28
    : 40;
  const key = resolveCompositeKey(
    'Add',
    src,
  );
  return (
    <B
      classValue={clsx(
        'absolute row gap-4 shadow-sm px-4 py-3 shadow-1-gray-02 overflow-hidden',
        isFirstPosition
          ? 'right-6 bottom-6 overflow-hidden'
          : 'right-12 bottom-12',
      )}
      look='neu-empty'
      layoutId={key}
      {...props}
    >
      <Backdrop
        id={resolveCompositeKey('add-button', key)}
        isHover={isHover}
      />
      <I
        className='relative'
        icon={clsx(
          'lets-icons:add-ring-duotone',
        )}
        width={iconSize}
        height={iconSize}
      />
      <samp
        className={clsx(
          'relative',
          isFirstPosition
            ? 'text-sm'
            : 'text-lg',
        )}
      >
        add to cart
      </samp>
    </B>
  );
};
