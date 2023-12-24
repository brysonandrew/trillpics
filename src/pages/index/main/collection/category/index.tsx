import { FC } from 'react';
import { resolveConfigFromSize } from '@components/image/resolveDimensionsFromSize';
import { TClassValueProps } from '@t/index';
import clsx, { ClassValue } from 'clsx';
import { useViewport } from '@context/viewport';
import { useDarkMode } from '@context/dark-mode';
import { Item } from './Item';

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
  const dm = useDarkMode();
  const vp = useViewport();
  const size = vp.isDimensions
    ? vp.containerWidth / srcs.length
    : 0;

  const imageConfig =
    resolveConfigFromSize({ size });
  return (
    <div
      className={clsx(
        'relative column-start grid-gap-16',
        classValue,
      )}
    >
      <figure className='relative text-2xl text-black-1 dark:text-white-9 z-20'>
        {title}
      </figure>
      <ul
        className={clsx(
          'relative w-full h-full',
          listClassValue,
        )}
      >
        {srcs.map((name) => {
          const canvasSrc = `/canvas/blackt.png`;
          const printSrc = `/categories/${categoryName}/${name}/0.png`;

          return (
            <Item
              key={printSrc}
              size={size}
              canvasSrc={canvasSrc}
              printSrc={printSrc}
            />
          );
        })}
      </ul>
    </div>
  );
};
