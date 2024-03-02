import { TUseImageReturn } from '@components/images/useImage';
import { Backdrop } from './Backdrop';
import { FC, Fragment } from 'react';
import { Portal } from '@components/images/Portal';
import { Design } from './Design';
import { resolveCompositeKey } from '@utils/keys';
import { useDarkMode } from '@brysonandrew/dark-mode';
import { TPassedProps } from '@components/images/item/image/config/types';

type TProps = Omit<
  TUseImageReturn,
  'boxProps'
> &
  TPassedProps & {
    size: number;
  };
export const Image: FC<TProps> = ({
  isOpen,
  isHover,
  size,
  designProps,
  backdropProps,
  onToggle,
  ...passedProps
}) => {
  const { darkKey } = useDarkMode();
  const Root = isOpen
    ? Portal
    : Fragment;

  const uniqueId = resolveCompositeKey(
    passedProps.config.src,
    darkKey,
    `shop:${passedProps.isShop}`,
  );

  return (
    <Root>
      <Backdrop
        isOpen={isOpen}
        backdropProps={backdropProps}
      />
      <Design
        layoutId={`design:${uniqueId}`}
        {...passedProps.config}
        size={size}
        {...designProps}
      />
    </Root>
  );
};
