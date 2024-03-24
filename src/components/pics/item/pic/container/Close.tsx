import { FC } from 'react';
import { BSm } from '@brysonandrew/interactive';
import clsx from 'clsx';
import { TButtonMotionProps } from '@brysonandrew/config-types';
import { Backdrop } from '../../../../decoration/Backdrop';
import { resolveCompositeKey } from '@utils/keys';
import { Pill } from '@components/decoration/Pill';
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
    <BSm
      classValue={clsx(
        'absolute row gap-4 px-4 py-3 border-1-gray-02 overflow-hidden right-12 top-12',
      )}
      look='neu-empty'
      layoutId={key}
      icon={
        <Pill
          classValue='relative zoom-out'
          gradient='bg-fuchsia-pink-rose'
        >
          x
        </Pill>
      }
      {...props}
      {...FADE_PRESENCE}
      title='exit'
    >
      <Backdrop
        id={resolveCompositeKey(
          'exit-button',
          key,
        )}
        isShown={Boolean(isHover)}
      />

      <samp
        className={clsx(
          'relative text-lg',
        )}
      >
        exit
      </samp>
    </BSm>
  );
};
