import { FC } from 'react';
import { resolveConfigFromSize } from '@components/image/resolveDimensionsFromSize';
import { useImage } from '@components/image/useImage';
import {
  Image,
  TPassedProps,
} from './image';

type TProps = TPassedProps & {
  size: number;
};
export const Item: FC<TProps> = ({
  size,
  ...passedProps
}) => {
  const imageConfig =
    resolveConfigFromSize({ size });

  const imageReturn = useImage({
    ...imageConfig,
    id: passedProps.src,
  });

  const { boxProps, ...rest } =
    imageReturn;

  return (
    <li {...boxProps}>
      <Image
        size={size}
        {...passedProps}
        {...rest}
      />
    </li>
  );
};
