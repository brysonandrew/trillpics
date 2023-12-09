import { TClassValueProps } from '@t/dom';

export const ICON_CLASS_VALUE_PROPS: TClassValueProps = {
  classValue:
    'dark:fill-highlight-1 fill-current dark:stroke-current stroke-none',
};

export const SHARED_ANIMATION_PROPS = {
  initial: false,
  style: { originX: '50%', originY: '50%' },
};

type TConfig = {
  isScroll: boolean;
  isHover: boolean;
};
export const resolveScale = ({
  isHover,
  isScroll,
}: TConfig) => (isScroll && !isHover ? 0.6 : 1);
