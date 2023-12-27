import { FC } from 'react';
import { B } from '@components/interactive/B';
import clsx from 'clsx';
import { TButtonMotionProps } from '@t/dom';
import { Backdrop } from '../../../../../../../components/decoration/Backdrop';
import { resolveCompositeKey } from '@utils/keys';
import { Circle } from '@components/decoration/Circle';
import { FADE_PRESENCE } from '@constants/animation';

type TProps = TButtonMotionProps & {
  isHover: boolean | null;
  src: string;
};
export const Close: FC<TProps> = ({
  isHover,
  src,
  ...props
}) => {
  const key = resolveCompositeKey(
    'none',
    src,
    'close fullscreen',
  );
  return (
    <B
      classValue={clsx(
        'absolute row gap-4 px-4 py-3 border-1-gray-02 overflow-hidden right-12 top-12',
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
        x
      </Circle>
      <samp
        className={clsx(
          'relative text-lg',
        )}
      >
        close
      </samp>
    </B>
  );
};
