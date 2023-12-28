import { FC } from 'react';
import { TClassValueProps } from '@t/index';
import clsx, { ClassValue } from 'clsx';
import { useViewport } from '@context/viewport';
import { Item } from '../../images/item';
import { resolveCompositeKey } from '@utils/keys';

type TProps = TClassValueProps & {
  listClassValue: ClassValue;
  name: string;
  title: string;
  srcs: readonly string[];
};
export const Category: FC<TProps> = ({
  name: categoryName,
  title,
  srcs,
  classValue,
  listClassValue,
}) => {
  const vp = useViewport();
  const size = vp.isDimensions
    ? vp.containerWidth / srcs.length
    : 0;

  return (
    <div
      className={clsx(
        'relative column-start grid-gap-16',
        classValue,
      )}
    >
      <figure className='relative text-black-1 dark:text-white-9 z-20'>
        {title}
      </figure>
      <ul
        className={clsx(
          'relative w-full h-full',
          listClassValue,
        )}
      >
        {srcs.map((name) => {
          const src = `/categories/${categoryName}/${name}/0.png`;
          return (
            <Item
              config={{ name, src }}
              key={resolveCompositeKey(
                categoryName,
                name,
              )}
              size={size}
            />
          );
        })}
      </ul>
    </div>
  );
};
