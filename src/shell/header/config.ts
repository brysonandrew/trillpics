import { TClassValueProps } from '@brysonandrew/config-types';
import { Cart } from '@components/notifications/cart';
import { DarkMode } from '@shell/header/right/dark-mode';

export const ICON_CLASS_VALUE_PROPS: TClassValueProps =
  {
    classValue:
      'dark:fill-accent fill-current dark:stroke-current stroke-none',
  };

export const SHARED_ANIMATION_PROPS = {
  initial: false,
  style: {
    originX: '50%',
    originY: '50%',
  },
};

type TConfig = {
  isScroll: boolean;
  isHover: boolean;
};
export const resolveScale = ({
  isHover,
  isScroll,
}: TConfig) =>
  isScroll && !isHover ? 0.6 : 1;
