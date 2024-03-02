import { FC } from 'react';
import { TResolveConfigFromSize } from '@components/images/image/resolveDimensionsFromSize';
import { useImage } from '@components/images/useImage';
import { Image } from './image';
import { TPassedProps } from '@components/images/item/image/config/types';

type TProps = TPassedProps & {
  size: number;
  imageConfig: TResolveConfigFromSize;
};
export const Item: FC<TProps> = ({
  size,
  imageConfig,
  ...passedProps
}) => {
  const imageReturn = useImage({
    ...imageConfig,
    id: passedProps.config.src,
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
