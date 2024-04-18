import { resolveVerticalShiftPresence } from '@/utils/animation';
import { motion } from 'framer-motion';
import {
  ICON_CLASS_VALUE_PROPS,
  SHARED_ANIMATION_PROPS,
  resolveScale,
} from '../config';
import { createElement } from 'react';
import { useScroll as useScrollContext } from '@/shell/providers/context/scroll';
import clsx from 'clsx';
import { CB } from '@/components/buttons/circle';
import { CBB } from '@/components/buttons/circle/CBB';
import { useHoverKey } from '@brysonandrew/cursor';
import { useBase } from '@/shell/providers/context/base';
import { TRANSITION } from '@brysonandrew/animation';
import { IconsCross } from '@/components/icons/cross';
import { IconsGallery } from '@/components/icons/pic/gallery';

export const Menu = () => {
  const { isMenu, onMenu } = useBase();
  const { isScroll } =
    useScrollContext();
  const title = `Open menu`;

  const { isHover, handlers } =
    useHoverKey('none', title);
  const handleTap = () => {
    onMenu();
  };
  const iconProps = (
    origin: `${number}%`,
  ) => ({
    key: origin,
    ...ICON_CLASS_VALUE_PROPS,
    ...resolveVerticalShiftPresence(
      origin,
    ),
  });
  const scale = resolveScale({
    isHover,
    isScroll,
  });

  return (
    <motion.div
      animate={{
        scale,
      }}
      transition={{
        ...TRANSITION,
        delay: isScroll ? 0.1 : 0,
      }}
      {...SHARED_ANIMATION_PROPS}
      {...handlers}
    >
      <CB
        classValue={clsx(
          'preserve-3d perspective-1000',
        )}
      >
        <CBB
          title={title}
          onTap={handleTap}
        >
          <div className='absolute -inset-2 center overflow-hidden rounded-full'>
            {createElement(
              isMenu
                ? IconsCross
                : IconsGallery,
              {
                ...iconProps(
                  isMenu
                    ? '-100%'
                    : '100%',
                ),
              },
            )}
          </div>
        </CBB>
      </CB>
    </motion.div>
  );
};
