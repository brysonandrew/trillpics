import { FC } from 'react';
import { resolveConfigFromSize } from '@components/image/resolveDimensionsFromSize';
import { useHover } from '@hooks/dom/useHover';
import { Portal } from '@components/image/Portal';
import { useImage } from '@components/image/useImage';
import {
  Image,
  TPassedProps,
} from './Image';
import { motion } from 'framer-motion';

type TProps = TPassedProps & {
  size: number;
};
export const Item: FC<TProps> = ({
  size,
  ...passedProps
}) => {
  const imageConfig =
    resolveConfigFromSize({ size });

  const imageReturn = useImage(
    imageConfig,
  );

  const { boxProps, ...rest } =
    imageReturn;

  return (
    <li
      className='relative overflow-hidden'
      {...boxProps}
    >
      <Image
        size={size}
        {...passedProps}
        {...rest}
      />
    </li>
  );
};
