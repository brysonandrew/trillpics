import { resolveVerticalShiftPresence } from '@utils/animation';
import { motion } from 'framer-motion';
import {
  ICON_CLASS_VALUE_PROPS,
  SHARED_ANIMATION_PROPS,
  resolveScale,
} from '../config';
import { TRANSITION } from '@constants/animation';
import { createElement } from 'react';
import { useScroll as useScrollContext } from '@context/scroll';
import clsx from 'clsx';
import { CB } from '@components/interactive/circle';
import { CBB } from '@components/interactive/circle/CBB';
import { useHoverKey } from '@hooks/dom/useHoverKey';
import { resolveCompositeKey } from '@utils/keys';
import { useApp } from '@context/app';
import { Cross } from '@components/icons/gallery/Cross';
import { Hamburger } from '@components/icons/gallery/Hamburger';

export const Menu = () => {
  const { isMenu, onMenu } = useApp();
  const { isScroll } =
    useScrollContext();
  const title = `Open menu`;

  const { isHover, handlers } =
    useHoverKey();
  const hoverkey = resolveCompositeKey(
    'dark-mode',
    title,
  );
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
    isHover: isHover(hoverkey),
    isScroll,
  });

  return (
    <motion.div
      animate={{
        scale,
      }}
      transition={{
        delay: isScroll ? 0.1 : 0,
        ...TRANSITION,
      }}
      {...SHARED_ANIMATION_PROPS}
      {...handlers(hoverkey)}
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
                ? Cross
                : Hamburger,
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
