import { TClassValueProps } from '@brysonandrew/config-types';
import { Cart } from '@components/notifications/cart';
import { DarkMode } from '@shell/header/item/dark-mode';
import { Shop } from '@shell/header/item/shop';

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

export const RIGHT_MENU_RECORD = {
  '/': [DarkMode, Cart],
  '/checkout': [DarkMode, Shop],
} as const;
