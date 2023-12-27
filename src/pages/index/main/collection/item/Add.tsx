import { FC } from 'react';
import { B } from '@components/interactive/B';
import { I } from '@components/Icon';
import clsx from 'clsx';
import { TButtonMotionProps } from '@t/dom';
import { Backdrop } from '../../../../../components/decoration/Backdrop';
import { resolveCompositeKey } from '@utils/keys';
import { Circle } from '@components/decoration/Circle';
import { FADE_PRESENCE } from '@constants/animation';

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
  const key = resolveCompositeKey(
    'Add',
    src,
  );
  return (
    <B
      classValue={clsx(
        'absolute row gap-4 px-4 py-3 border-1-gray-02 overflow-hidden',
        isFirstPosition
          ? 'right-6 bottom-6 overflow-hidden'
          : 'right-12 bottom-12',
      )}
      look='neu-empty'
      layoutId={key}
      {...props}
      {...FADE_PRESENCE}
    >
      <Backdrop
        id={resolveCompositeKey(
          'add-button',
          key,
        )}
        isShown={Boolean(isHover)}
      />

      <Circle
        classValue='relative'
        gradient='bg-emerald-teal-cyan'
      >
        +
      </Circle>
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
